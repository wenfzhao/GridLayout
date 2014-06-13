/**
 * @author wzhao@money-media.com
 * @copyright Money-Media Inc. 2014
 * 
 * Overrides Alloy.createController so that it can load the platform specific resource
 */

// original Alloy.createController method
var createController = Alloy.createController;

// override
Alloy.createController = function(name, args) {
    var osname = Ti.Platform.osname;
    var controllerPath = Ti.Filesystem.resourcesDirectory + 'alloy/controllers/';
    // search controller in the os name folder
    var controllerName = osname + '/' + name;
    var file = Ti.Filesystem.getFile(controllerPath, controllerName + '.js');
    
    // load the controller in the platform folder if found, other load the default
    if (file.exists()) {
        name = controllerName;
    }
    
    return createController(name, args);
};