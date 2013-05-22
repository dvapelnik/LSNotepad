//--------------------- LocalStorageHelper ---------------------//
function LocalStorageHelper() {
    this.messageStorageNotAvailable = 'Local storage is not available';
}

LocalStorageHelper.prototype.addItemByKey = function (value, key) {
    if (this.checkStorage() && !this.hasItemByKey(key)) {
        localStorage.setItem(key, value);
    }
}

LocalStorageHelper.prototype.getItemByKey = function (key) {
    if (this.checkStorage() && this.hasItemByKey(key)) {
        return localStorage.getItem(key);
    }
}

LocalStorageHelper.prototype.hasItemByKey = function (key) {
    if(this.checkStorage()){
        return  !(localStorage.getItem(key) == undefined);
    }
}

LocalStorageHelper.prototype.removeItemByKey = function (key) {
    if(this.checkStorage() && this.hasItemByKey(key)){
        localStorage.removeItem(key);
    }
}

LocalStorageHelper.prototype.checkStorage = function () {
    if (localStorage) {
        return true;
    } else {
        throw new Error(this.messageStorageNotAvailable);
    }
}

LocalStorageHelper.prototype.cleanStorage = function () {
    if (this.checkStorage()) {
        localStorage.clear();
    }
}


//----------------------------- NOTEPAD -----------------------//

function Notepad(container) {
    if (!Notepad.__instance) {
        Notepad.__instance = this;
    } else {
        return Notepad.__instance;
    }

    this.containerId = container;
    this.container = jQuery(container || '#notes');
    this.ids = [];
    this.keys = [];
    this.prefix = 'notepad_';
    this.closeIcon = "data:image/png;base64,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";

    this.lsHelper = new LocalStorageHelper();

    this.container.on('click', 'a.remove', function (event) {
        var notepad = new Notepad();
        var noteKey = notepad.prefix + jQuery(this).attr('data-key-id');
        notepad.removeNote(noteKey);
        return false;
    });
}

Notepad.prototype.addNote = function (title, description, date) {
    var note = new Note(title, description, date);
    this.lsHelper.addItemByKey(note.getJSON(), this.prefix + +this.getNextKeyFromStorage());
    this.reloadAllNotesFromStorage();
}

Notepad.prototype.removeNote = function(key){
    this.lsHelper.removeItemByKey(key);
    this.reloadAllNotesFromStorage();
}

Notepad.prototype.loadKeys = function () {
    if (this.lsHelper.checkStorage()) {
        var key;
        this.keys = [];
        this.ids = [];
        for (var i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
            this.keys.push(key);
            this.ids.push(key.replace(new RegExp('^' + this.prefix), ''));
        }
    }
}

Notepad.prototype.getNextKeyFromStorage = function () {
    this.loadKeys();
    if (this.ids.length == 0) {
        return 0;
    } else {
        this.ids.sort(function (a, b) {
            return a > b ? -1 : 1;
        })
        return 1 + +this.ids[0];
    }
}

Notepad.prototype.erase = function () {
    this.lsHelper.cleanStorage();
    this.reloadAllNotesFromStorage();
}

Notepad.prototype.reloadAllNotesFromStorage = function () {
    this.container.find('*').remove();
    this.loadKeys();
    if (this.keys.length !== 0) {
        this.keys.forEach(function (item) {
            new Notepad().addNoteIntoContainer(JSON.parse(new Notepad().lsHelper.getItemByKey(item)), item);
        });
    }
    var container = jQuery(this.containerId);
    if (container.children().length === 0) {
        container.hide();
    } else {
        container.show();
    }
}

Notepad.prototype.addNoteIntoContainer = function (note, key) {
    if (note.title.length !== 0 && note.description.length !== 0) {
        this.container.append('<div class="note">' +
            '<div class="title">' + note.title + ':' +
            '</div>' +
            '<div class="description">' + note.description +
            '</div><a data-key-id="' + key.replace(new RegExp('^' + this.prefix), '') + '" href="#" class="remove"><img src="' + this.closeIcon + '"></a>' +
            '</div>'
        );
    }
}

//--------------------------------- NOTE ------------------------//

function Note(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
}

Note.prototype.getJSON = function () {
    return JSON.stringify(this, function (key, value) {
        return value;
    })
}