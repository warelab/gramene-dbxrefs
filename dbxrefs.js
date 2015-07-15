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
  TAIR_LOCUS_xrefs: TAIR,
  ARAPORT_GENE_xrefs: TAIR,
  UniGene_xrefs: {
    label: 'UniGene',
    url: function(id) {
      return 'http://www.ncbi.nlm.nih.gov/unigene/?term='+id;
    }
  },
  UniParc_xrefs: {
    label: 'UniParc',
    url: function(id) {
      return 'http://www.uniprot.org/uniparc/'+id;
    }
  },
  'Uniprot/SPTREMBL_xrefs': {
    label: 'UniProt',
    url: function(id) {
      return 'http://www.uniprot.org/uniprot/'+id;
    }
  },
  protein_id_xrefs: ENA,
  EMBL_xrefs: ENA,
  KEGG_Enzyme_xrefs: {
    label: 'KEGG Enzyme',
    url: function(id) {
      return 'http://www.genome.jp/dbget-bin/www_bget?'+id;
    }
  },
  UniPathway_xrefs: {
    label: 'UniPathway',
    url: function(id) {
      return 'http://www.grenoble.prabi.fr/obiwarehouse/unipathway/upa?upid='+id;
    }
  },
  MetaCyc_xrefs: {
    label: 'MetaCyc',
    url: function(id) {
      return 'http://metacyc.org/META/NEW-IMAGE?type=NIL&object='+id;
    }
  },
  MEROPS_xrefs: {
    label: 'MEROPS',
    url: function(id) {
      return 'http://merops.sanger.ac.uk/cgi-bin/pepsum?id='+id;
    }
  },
  PDB_xrefs: {
    label: 'PDB',
    url: function(id) {
      return 'http://www.rcsb.org/pdb/explore.do?structureId='+id;
    }
  },
  GOA_xrefs: {
    label: 'QuickGO',
    url: function(id) {
      return 'http://www.ebi.ac.uk/QuickGO/GProtein?ac='+id;
    }
  },
  IntEnz_xrefs: {
    label: 'IntEnz',
    url: function(id) {
      return 'http://www.ebi.ac.uk/intenz/query?cmd=SearchEC&ec='+id;
    }
  }
};
