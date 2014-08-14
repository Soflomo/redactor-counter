define(function () {

    var create = function(element) {
        var container = element.parentNode;
        var textField = container.querySelector('.redactor_editor');

        addListener(textField);
        container.insertAdjacentHTML('beforeend', '<div class="redactor-counter">Characters: <span class="redactor-counter__characters">'+countCharacters(textField)+'</span> Words: <span class="redactor-counter__words">'+countWords(textField)+'</span></div>');
    }

    var addListener = function(textField) {
        textField.addEventListener('keyup',          update, false);
        textField.addEventListener('propertychange', update, false);
        textField.addEventListener('input',          update, false);
        textField.addEventListener('paste',          update, false);
    }

    var update = function() {
        var characterElement = this.parentNode.querySelector('.redactor-counter .redactor-counter__characters');
        var wordElement      = this.parentNode.querySelector('.redactor-counter .redactor-counter__words');
        characterElement.textContent = countCharacters(this);
        wordElement.textContent      = countWords(this);
    }

    var countCharacters = function(textField) {
        return textField.textContent.replace(/\u200B/g,'').length;
    };

    var countWords = function(textField) {
        var text    = textField.innerText.replace(/\u200B/g,'').replace(/<\/?[a-z][^>]*>/gi, '');
        var trimmed = text.trim();
        return trimmed ? (trimmed.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g) || []).length : 0;
    };

    return {
        init: function(elements) {
            [].forEach.call(document.querySelectorAll(elements), function(element) {
                create(element);
            });
        }
    };

});