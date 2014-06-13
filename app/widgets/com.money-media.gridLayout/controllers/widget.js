var args = arguments[0] || {};

var columns = args.columns || 4;
var rows = args.rows || 3;
var gridLayout = args.layout || 'horizontal';
var cellStyles = args.cellStyles || {};

var views = [];

// views
var gridView = $.gridView;


/***********************************
 * 
 *    Event Handlers
 * 
 ***********************************/


/***********************************
 * 
 *    Class Methods
 * 
 ***********************************/

function getTotalCells() {
    return columns * rows;
}

function getAvailableCells() {
    var total = getTotalCells();
    var available = total;
    
    for (var i in views) {
        var viewConfig = views[i];
        available -= viewConfig.columnSpan;
    }
    return available;
}

/**
 * Calculates the width percentage of a single cell
 */
function getSingleCellWidthRatio() {
    var ratio = 1 / columns;
    return ratio;
}

/**
 * Height Ratio in percentage
 */
function getSingleCellHeightRatio() {
    var ratio = 1 / rows;
    return ratio;
}

/**
 * Returns the percentage in String for a row
 */
function getHeightPercentage(rowSpan) {
    var ratio = getSingleCellHeightRatio();
    var percentage = ratio * rowSpan * 100 + '%';
    return percentage;
}

/**
 * Returns the percentage in String for a column
 */
function getWidthPercentage(columnSpan) {
    var ratio = getSingleCellWidthRatio();
    var percentage = ratio * columnSpan * 100 + '%';
    return percentage;
}

/**
 * Generates the view for the grid cell
 */
function getGridCellView(view, columnSpan) {
    var rowSpan = 1;
    var defaultOptions = {classes: ['grid']};
    var options = _.extend(defaultOptions, cellStyles);
    var columnView = Titanium.UI.createView(options);
    var width = getWidthPercentage(columnSpan);
    var height = getHeightPercentage(rowSpan);
    columnView.setWidth(width);
    columnView.setHeight(height);
    columnView.add(view);
    return columnView;
}



/** expose class methods **/

/**
 * Renders the view
 */
$.render = function() {
    gridView.layout = gridLayout;
    this.clear();
    
    for (var i in views) {
        var viewConfig = views[i];
        var gridCellView = getGridCellView(viewConfig.view, viewConfig.columnSpan);
        gridView.add(gridCellView);
    }
};

$.clear = function() {
    gridView.removeAllChildren();
};

/**
 * Sets the number of columns
 * 
 * @return {void}
 */ 
$.setColumnSize = function(size) {
    columns = size;
};

/**
 * Sets the number of rows
 * 
 * @return {void}
 */
$.setRowSize = function(size) {
    rows = size;
};

/**
 * Sets the grid layout
 * 
 * @return {void}
 */
$.setLayout = function(layout) {
    gridLayout = layout;
};

/**
 * Adds a view
 * 
 * @param {Titanium.UI.View} view
 */
$.addView = function(view, columnSpan) {
    columnSpan = columnSpan || 1;
    var viewConfig = {
        view: view,
        columnSpan: columnSpan
    };
    views.push(viewConfig);
};

/**
 * Sets the views with configuration
 * i.e
 *      [
 *          {
 *              view: {Titanium.UI.View},
 *              columnSpan: {Integer}
 *          }
 *      ]
 * 
 * @param {Array} view
 */
$.setViews = function(viewConfigs) {
    views = viewConfigs;
};

$.setCellStyles = function(styles) {
    cellStyles = styles;
};
