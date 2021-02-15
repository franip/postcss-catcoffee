module.exports = {
  parser: 'postcss-scss',
  plugins: [
    // postcss-present-env
    // https://preset-env.cssdb.org
    //
    // stages
    // https://cssdb.org/#staging-process
    // ----------------------------------------------------------------------

    // ejemplo básico
    require('postcss-preset-env')({ stage: 0 }), // stage 0 = experimental ... 4 = stable (por defecto stage 2)

    // ejemplo de stage específico y sobreescritura de reglas
    // require('postcss-preset-env')({ stage: 3, features: { 'nesting-rules': true } }),

    // ejemplo de stage específico, reglas y warning cuando unresolved
    // require('postcss-preset-env')({ stage: 3, features: { 'color-mod-function': { unresolved: 'warn'} } }),

    // ejemplo de versiones de navegadores
    // require('postcss-preset-env')({ browsers: 'last 2 versions' }),

    // ejemplo de desactivar autoprefixer
    // require('postcss-preset-env')({ autoprefixer: false }),

    // ejemplo de sintaxis alternativa
    // ['postcss-preset-env', {}],

    // precss
    // https://github.com/jonathantneal/precss
    // ----------------------------------------------------------------------
    require('precss'),

    // postcss-short
    // ----------------------------------------------------------------------
    require('postcss-short'),

    // autoprefixer (no es necesario si se usa postcss-present-env)
    // ----------------------------------------------------------------------
    // require('autoprefixer'),

    // sintaxis alternativa
    // ['autoprefixer', {}],
  ],
};
