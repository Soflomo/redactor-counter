define(function () {

    var create = function(element) {
        var container = element.parentNode;
        var textField = container.querySelector('.redactor_editor');

        container.insertAdjacentHTML('beforeend', '<div class="redactor-counter">Characters: <span class="redactor-counter__characters">'+countCharacters(textField)+'</span> Words: <span class="redactor-counter__words">'+countWords(textField)+'</span></div>');

        var characterElement = container.querySelector('.redactor-counter .redactor-counter__characters');
        var wordElement      = container.querySelector('.redactor-counter .redactor-counter__words');

        addListener(textField, characterElement, wordElement);
    }

    var addListener = function(textField, characterElement, wordElement) {
        textField.addEventListener('keyup',          function(){ update(textField, characterElement, wordElement) });
        textField.addEventListener('propertychange', function(){ update(textField, characterElement, wordElement) });
        textField.addEventListener('input',          function(){ update(textField, characterElement, wordElement) });
        textField.addEventListener('paste',          function(){ update(textField, characterElement, wordElement) });
    }

    var update = function(textField, characterElement, wordElement) {
        characterElement.textContent = countCharacters(textField);
        wordElement.textContent      = countWords(textField);
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