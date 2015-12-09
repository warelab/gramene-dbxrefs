var ENA = {
  label: 'ENA',
  url: function(id) {
    return 'http://www.ebi.ac.uk/ena/data/view/'+id;
  }
};
var TAIR = {
  label: 'TAIR',
  url: function(id) {
    return 'https://apps.araport.org/thalemine/portal.do?externalids='+id;    
  }
}
module.exports = {
  TAIR_LOCUS__xrefs: TAIR,
  ARAPORT_GENE__xrefs: TAIR,
  UniGene__xrefs: {
    label: 'UniGene',
    url: function(id) {
      return 'http://www.ncbi.nlm.nih.gov/unigene/?term='+id;
    }
  },
  UniParc__xrefs: {
    label: 'UniParc',
    url: function(id) {
      return 'http://www.uniprot.org/uniparc/'+id;
    }
  },
  'Uniprot/SPTREMBL__xrefs': {
    label: 'UniProt',
    url: function(id) {
      return 'http://www.uniprot.org/uniprot/'+id;
    }
  },
  protein_id__xrefs: ENA,
  EMBL__xrefs: ENA,
  KEGG_Enzyme__xrefs: {
    label: 'KEGG Enzyme',
    url: function(id) {
      return 'http://www.genome.jp/dbget-bin/www_bget?'+id;
    }
  },
  UniPathway__xrefs: {
    label: 'UniPathway',
    url: function(id) {
      return 'http://www.grenoble.prabi.fr/obiwarehouse/unipathway/upa?upid='+id;
    }
  },
  MetaCyc__xrefs: {
    label: 'MetaCyc',
    url: function(id) {
      return 'http://metacyc.org/META/NEW-IMAGE?type=NIL&object='+id;
    }
  },
  MEROPS__xrefs: {
    label: 'MEROPS',
    url: function(id) {
      return 'http://merops.sanger.ac.uk/cgi-bin/pepsum?id='+id;
    }
  },
  PDB__xrefs: {
    label: 'PDB',
    url: function(id) {
      return 'http://www.rcsb.org/pdb/explore.do?structureId='+id;
    }
  },
  GOA__xrefs: {
    label: 'QuickGO',
    url: function(id) {
      return 'http://www.ebi.ac.uk/QuickGO/GProtein?ac='+id;
    }
  },
  IntEnz__xrefs: {
    label: 'IntEnz',
    url: function(id) {
      return 'http://www.ebi.ac.uk/intenz/query?cmd=SearchEC&ec='+id;
    }
  }
};
