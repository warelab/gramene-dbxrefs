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
  TAIR_LOCUS: TAIR,
  ARAPORT_GENE: TAIR,
  UniGene: {
    label: 'UniGene',
    url: function(id) {
      return 'http://www.ncbi.nlm.nih.gov/unigene/?term='+id;
    }
  },
  UniParc: {
    label: 'UniParc',
    url: function(id) {
      return 'http://www.uniprot.org/uniparc/'+id;
    }
  },
  'Uniprot/SPTREMBL': {
    label: 'UniProt',
    url: function(id) {
      return 'http://www.uniprot.org/uniprot/'+id;
    }
  },
  'Uniprot/SWISSPROT': {
    label: 'UniProt',
    url: function(id) {
      return 'http://www.uniprot.org/uniprot/'+id;
    }
  },
  protein_id: ENA,
  EMBL: ENA,
  KEGG_Enzyme: {
    label: 'KEGG Enzyme',
    url: function(id) {
      return 'http://www.genome.jp/dbget-bin/www_bget?'+id;
    }
  },
  UniPathway: {
    label: 'UniPathway',
    url: function(id) {
      return 'http://www.grenoble.prabi.fr/obiwarehouse/unipathway/upa?upid='+id;
    }
  },
  MetaCyc: {
    label: 'MetaCyc',
    url: function(id) {
      return 'http://metacyc.org/META/NEW-IMAGE?type=NIL&object='+id;
    }
  },
  MEROPS: {
    label: 'MEROPS',
    url: function(id) {
      return 'http://merops.sanger.ac.uk/cgi-bin/pepsum?id='+id;
    }
  },
  PDB: {
    label: 'PDB',
    url: function(id) {
      return 'http://www.rcsb.org/pdb/explore.do?structureId='+id;
    }
  },
  GOA: {
    label: 'QuickGO',
    url: function(id) {
      return 'http://www.ebi.ac.uk/QuickGO/GProtein?ac='+id;
    }
  },
  IntEnz: {
    label: 'IntEnz',
    url: function(id) {
      return 'http://www.ebi.ac.uk/intenz/query?cmd=SearchEC&ec='+id;
    }
  }
};
