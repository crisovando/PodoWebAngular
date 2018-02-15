'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = normalizePort(process.env.PORT || 8080);
const excel = require('node-excel-export');

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/** Express configuration */
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

/** API routes */

app.get('/api/exportar', (req, res) => {
  // You can define styles as json object
  // More info: https://github.com/protobi/js-xlsx#cell-styles
  const styles = {
    headerDark: {
      fill: {
        fgColor: {
          rgb: 'FF000000'
        }
      },
      font: {
        color: {
          rgb: 'FFFFFFFF'
        },
        sz: 14,
        bold: true,
        underline: true
      }
    },
    cellPink: {
      fill: {
        fgColor: {
          rgb: 'FFFFCCFF'
        }
      }
    },
    cellGreen: {
      fill: {
        fgColor: {
          rgb: 'FF00FF00'
        }
      }
    }
  };

  //Array of objects representing heading rows (very top)
  const heading = [
    [{
      value: 'a1',
      style: styles.headerDark
    }, {
      value: 'b1',
      style: styles.headerDark
    }, {
      value: 'c1',
      style: styles.headerDark
    }],
    ['a2', 'b2', 'c2'] // <-- It can be only values
  ];

  //Here you specify the export structure
  const specification = {
    customer_name: { // <- the key should match the actual data key
      displayName: 'Customer', // <- Here you specify the column header
      headerStyle: styles.headerDark, // <- Header style
      cellStyle: function (value, row) { // <- style renderer function
        // if the status is 1 then color in green else color in red
        // Notice how we use another cell value to style the current one
        return (row.status_id == 1) ? styles.cellGreen : {
          fill: {
            fgColor: {
              rgb: 'FFFF0000'
            }
          }
        }; // <- Inline cell style is possible 
      },
      width: 120 // <- width in pixels
    },
    status_id: {
      displayName: 'Status',
      headerStyle: styles.headerDark,
      cellFormat: function (value, row) { // <- Renderer function, you can access also any row.property
        return (value == 1) ? 'Active' : 'Inactive';
      },
      width: '10' // <- width in chars (when the number is passed as string)
    },
    note: {
      displayName: 'Description',
      headerStyle: styles.headerDark,
      cellStyle: styles.cellPink, // <- Cell style
      width: 220 // <- width in pixels
    }
  };

  // The data set should have the following shape (Array of Objects)
  // The order of the keys is irrelevant, it is also irrelevant if the
  // dataset contains more fields as the report is build based on the
  // specification provided above. But you should have all the fields
  // that are listed in the report specification
  const dataset = [{
    customer_name: 'IBM',
    status_id: 1,
    note: 'some note',
    misc: 'not shown'
  },
  {
    customer_name: 'HP',
    status_id: 0,
    note: 'some note'
  },
  {
    customer_name: 'MS',
    status_id: 0,
    note: 'some note',
    misc: 'not shown'
  }
  ];

  // Define an array of merges. 1-1 = A:1
  // The merges are independent of the data.
  // A merge will overwrite all data _not_ in the top-left cell.
  const merges = [{
    start: {
      row: 1,
      column: 1
    },
    end: {
      row: 1,
      column: 10
    }
  },
  {
    start: {
      row: 2,
      column: 1
    },
    end: {
      row: 2,
      column: 5
    }
  },
  {
    start: {
      row: 2,
      column: 6
    },
    end: {
      row: 2,
      column: 10
    }
  }
  ];

  // Create the excel report.
  // This function will return Buffer
  const report = excel.buildExport(
    [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
      {
        name: 'Report', // <- Specify sheet name (optional)
        heading: heading, // <- Raw heading array (optional)
        merges: merges, // <- Merge cell ranges
        specification: specification, // <- Report specification
        data: dataset // <-- Report data
      }
    ]
  );

  // You can then return this straight
  res.attachment('report.xlsx'); // This is sails.js specific (in general you need to set headers)
  res.send(report);
  
});

// envía el index.html para la SPA.
app.get('/', (req, res, next) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else {
    next();
  }
});

/** Inicia el servidor */
app.listen(port, () => console.log('Express running on port ' + port));
