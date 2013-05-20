function Notepad() {
    Notepad.ids = [];
    Notepad.prefix = "note_";

    Notepad.getNoteById = function (id) {
        var realId = Notepad.prefix + id;
    }

    Notepad.addNote = function(note){

    }
}

function Note() {
    this.title = undefined;
    this.description = undefined;
    this.date = undefined;

    Note.create = function (title, description, date) {
        var note = new Note();

        note.title = title;
        note.description = description;
        note.date = date;

        return note;
    }

    Note.parseFromJSON = function (jsonString) {
        var note = JSON.parse(jsonString, function (key, value) {
            switch (key) {
            case 'date':
                return new Date(value);
            default :
                return value;
            }
        });

        return note;
    }

    this.toJSON = function () {
        return JSON.stringify(this, function (key, value) {
            switch (key) {
            case 'title':
            case 'description':
                return value;
            case 'date':
                return value.toString();
            default :
                return undefined;
            }
        });
    }
}

function Helper(){
    Helper.getFromStorageByKey = function(key){

    }

    Helper.checkStorage = function(){
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    }
}