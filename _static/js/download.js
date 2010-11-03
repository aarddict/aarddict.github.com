var aarddict = {

    Detect : function() {
	var platform = navigator.platform.toLowerCase();
	var userAgent = navigator.userAgent.toLowerCase();
	return {
	    isWindows: function() {
		return navigator.platform.indexOf('Win') != -1;
	    },

	    isMacOSXIntel: function() {
		return platform.indexOf('mac') != -1 && 
		    platform.indexOf('intel') != -1 &&
		    userAgent.indexOf('os x') != -1;
	    },

	    isLinux: function() {
		return platform.indexOf('linux') != -1;
	    },

	    isUbuntu: function() {
		if (userAgent.indexOf('ubuntu') != -1) {
		    return true;
		}		
		if ('vendor' in navigator) {
		    var vendor = navigator.vendor;
		    return vendor && vendor.toLowerCase().indexOf('ubuntu') != -1;
		}
		return false;
	    },

	    isMaemo5: function() {
		return platform.indexOf('armv') != -1 && 
		    userAgent.indexOf('n900') != -1 &&
		    userAgent.indexOf('maemo') != -1;
	    },

	    setDownloadLink: function(a) {
		if (this.isWindows()) {
		    a
			.attr('href',
			      'http://github.com/downloads/aarddict/desktop/aarddict_0.9.1-1_setup.exe')
			.attr('title',
			      'Aard Dictionary for Windows');
		    return true;
		}
		if (this.isMacOSXIntel()) {
		    a
			.attr('href',
			      'http://github.com/downloads/aarddict/desktop/aarddict_0.9.1-1_macosx-intel.zip')
			.attr('title',
			      'Aard Dictionary for Mac OS X (Intel)');
		    return true;
		}
		if (this.isLinux() && this.isUbuntu()) {
		    a
			.attr('href',
			      'http://github.com/downloads/aarddict/desktop/aarddict_0.9.1-1_all.deb')
			.attr('title',
			      'Aard Dictionary for Ubuntu Linux');
		    return true;
		}
		if (this.isLinux() && this.isMaemo5()) {
		    a
			.attr('href',
			      'http://github.com/downloads/aarddict/desktop/maemo.install')
			.attr('title',
			      'Aard Dictionary for Maemo 5 (N900)');
		    return true;
		}
		return false;
	    }
	};
    }

};
