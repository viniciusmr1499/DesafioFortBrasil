$("[name=numerico]").mask('AAAAAAAAAAAA', {
    translation: {
      'A': {
        pattern: /[1-9]/, optional: true
      }
    }
});