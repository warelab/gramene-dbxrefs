module.exports = {
  TAIR_LOCUS_xrefs: {
    label: 'TAIR',
    url: function(id) {
      return 'https://apps.araport.org/thalemine/portal.do?externalids='+id;
    }
  }
};
