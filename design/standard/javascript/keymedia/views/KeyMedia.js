KeyMedia.views.KeyMedia = Backbone.View.extend({
    // Holds current active subview
    view : null,
    destination : null,
    host : null,
    type : null,
    wrapper : null,

    container : false,

    initialize : function(options)
    {
        options = (options || {});
        _.bindAll(this, 'render', 'search', 'close', 'enableUpload', 'changeMedia');

        // DOM node to store selected media id into
        this.destination = options.destination;
        this.host = options.host;
        this.type = options.type;
        this.ending = options.ending;
        this.wrapper = options.wrapper;

        if ('container' in options) {
            this.container = options.container;
        }
        else {
            this.container = new KeyMedia.views.Modal().render();
            this.container.$el.prependTo('body');
        }
        this.container.bind('close', this.close);
        return this;
    },

    events : {
        'click .keymedia-remote-file' : 'search',
        'click .keymedia-scale' : 'scaler',
        'click .keymedia-remove-file' : 'remove'
    },

    render : function()
    {
        this.container.render();
        this.enableUpload();
        this.delegateEvents();
        return this;
    },

    remove : function(e)
    {
        e.preventDefault();
        this.destination.val('');
        this.host.val('');
        this.type.val('');
        this.ending.val('');
        this.wrapper.find('.keymedia-image').remove();
        this.$('.keymedia-scale').remove();
        this.$('.keymedia-remove-file').remove();
        return this;
    },

    changeMedia : function(data)
    {
        this.destination.val(data.id);
        this.host.val(data.host);
        this.type.val(data.type);
        this.ending.val(data.ending);
        return this;
    },

    enableUpload : function() {
        this.upload = new KeyMedia.views.Upload({
            model : this.model,
            uploaded : this.changeMedia,
            el : this.$el.parent(),
            prefix : this.$el.data('prefix'),
            version : this.$el.data('version')
        });
        this.upload.render();
        return this;
    },

    search : function()
    {
        this.view = new KeyMedia.views.Browser({
            collection : this.model.medias,
            onSelect : this.changeMedia,
            el : this.container.show().contentEl
        }).render();

        this.model.medias.search('');
    },

    // Open a scaling gui
    scaler : function(e) {
        if (!(this.destination && this.destination.val())) {
            return false;
        }

        var node = $(e.currentTarget);
        settings = {
            mediaId : this.destination.val(),
            versions : node.data('versions'),
            trueSize : node.data('truesize'),
            host : this.host.val(),
            type : this.type.val(),
            model : this.model,
            el : this.container.show().contentEl
        };
        this.view = new KeyMedia.views.Scaler(settings);
        this.model.scale(settings.mediaId);
    },

    close : function() {
        if (this.view && ('close' in this.view)) {
            this.view.close();
        }
    }
});

