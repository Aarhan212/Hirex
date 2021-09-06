module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
<<<<<<< HEAD
  };
};
=======
    plugins: [
      "module:react-native-dotenv",
    ]
  };
};
>>>>>>> parent of ddb4ce4 (delete)
