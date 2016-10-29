exports.decorateConfig = config => {
  config.css += `
    .header_header {
      display: none:
    }
    .terms_terms {
      margin-top: 0;
    }
  `;

  return config;
}
