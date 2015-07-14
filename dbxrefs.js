module.exports = {
  TAIR_LOCUS: {
    label: 'TAIR',
    url: function(id) {
      return 'https://apps.araport.org/thalemine/portal.do?externalids='+id;
    }
  }
};
