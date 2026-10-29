var ENA = {
  label: 'ENA',
  url: function(id) {
    return 'http://www.ebi.ac.uk/ena/data/view/'+id;
  }
};
var thalemine = {
  label: 'thalemine',
  url: function(id) {
    return 'https://bar.utoronto.ca/thalemine/keywordSearchResults.do?searchTerm='+id+'&searchSubmit=search';
  }
};
var TAIR = {
  label: 'TAIR',
  url: function(id) {
    return `https://www.arabidopsis.org/results?mainType=general&category=genes&searchText=${id}`
  }
};
// A within-site facet filter, the same shape PanOryza / SB_PanGene / Pan-Zea already use below.
// This is the right target when an xref id names a SET of genes rather than one external record --
// a Grassius id is a transcription-factor FAMILY (LEUNIG, AP2/ERF-ERF, Sigma70-like), not a gene
// symbol -- and it keeps working when the external site does not. encodeURIComponent matters here:
// family names contain '/'.
function facetLink(field, category) {
  return {
    label: category,
    url: function (id) {
      var v = encodeURIComponent(id);
      return `?fq_field=${field}&fq_value=${v}&category=${encodeURIComponent(category)}&name=${v}`;
    }
  };
}

module.exports = {
  TAIR_LOCUS: TAIR,
  ARAPORT_GENE: thalemine,

  // ---- curated gene symbols and names -------------------------------------------------------
  // These five were all present in the data and absent from this registry, so Xrefs.js, which
  // filters on isKnown(xr.db), silently dropped every one of them: TAIR_SYMBOL 9,793 genes,
  // Oryzabase 8,051, RAP-DB 1,175, Grassius 8,796, external_wheat_gene_names 257. MaizeGDB and DOI
  // are new in release 70.
  TAIR_SYMBOL: {
    label: 'TAIR symbol',
    url: function (id) {
      // Same arabidopsis.org search this registry already uses for TAIR_LOCUS; the search box takes
      // a symbol as readily as a locus. Not verifiable from a server -- arabidopsis.org answers 403
      // to non-browser clients -- so this reuses an already-shipped template rather than a new guess.
      return `https://www.arabidopsis.org/results?mainType=general&category=genes&searchText=${encodeURIComponent(id)}`;
    }
  },
  Oryzabase: {
    label: 'Oryzabase',
    url: function (id) {
      // id is a rice gene symbol (RPS5, OsDjC1, OsHAP5H). Endpoint returns 200; Oryzabase renders
      // its results client-side, so a server-side fetch cannot confirm a given symbol resolves.
      return `https://shigen.nig.ac.jp/rice/oryzabase/gene/search?name=${encodeURIComponent(id)}`;
    }
  },
  'RAP-DB': {
    label: 'RAP-DB',
    url: function (id) {
      // id is a rice gene symbol (SPL33, OsTLP27), so this is the name SEARCH, not the /locus/
      // route that expects an Os##g####### id. Host is naro.go.jp: the affrc.go.jp host still
      // referenced elsewhere in this codebase does not answer at all.
      return `https://rapdb.dna.naro.go.jp/search/?name=${encodeURIComponent(id)}`;
    }
  },
  MaizeGDB: {
    label: 'MaizeGDB',
    url: function (id) {
      // id is a curated maize gene symbol (gbss2, thk1, mha11). gene_center/gene/ is the route this
      // codebase already uses for MaizeGDB (see gramene-search Location.js). NOT verified from
      // squam: www.maizegdb.org answers 403 to automated clients via Cloudflare, so this needs one
      // click in a browser to confirm.
      return `https://www.maizegdb.org/gene_center/gene/${encodeURIComponent(id)}`;
    }
  },
  DOI: {
    label: 'DOI',
    url: function (id) {
      // Curated references are not all PMIDs -- RAP-DB keys 246 of its references by DOI. Do NOT
      // encode: a DOI contains '/' as a structural separator (10.1016/j.cj.2016.06.014).
      return `https://doi.org/${id}`;
    }
  },
  Grassius: facetLink('Grassius__xrefs', 'Grassius TF family'),
  external_wheat_gene_names: facetLink('external_wheat_gene_names__xrefs', 'Wheat gene name'),

  PanOryza: {
    label: 'PanOryza pan gene',
    url: function(id) {
      return `?fq_field=PanOryza__xrefs&fq_value=${id}&category=PanOryza pan gene&name=${id}`
    }
  },
  SB_PanGene: {
    label: 'SorghumBase pan gene',
    url: function(id) {
      return `?fq_field=SB_PanGene__xrefs&fq_value=${id}&category=SorghumBase pan gene&name=${id}`
    }
  },
  'Pan-Zea': {
    label: "Maize pan gene",
    url: function(id) {
      return `?fq_field=Pan-Zea__xrefs&fq_value=${id}&category=Maize pan gene&name=${id}`
    }
  },
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
  EMBL: ENA,
  protein_id: {
    label: 'ENA proteins',
    url: function(id) {
      return 'http://www.ebi.ac.uk/ena/data/view/'+id;
    }
  },
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
  },
  reactions: {
    label: 'Plant Reactome',
    url: function(id) {
      return 'http://plantreactome.gramene.org/content/detail/'+id;
    }
  },
	NASC_GENE_ID: {
		label: 'NASC',
		url: function(id) {
			return 'http://arabidopsis.info/MultiResult?agi_code='+id;
		}
	},
	KNETMINER_ARA: {
		label: 'KnetMiner',
		url: function(id) {
			return 'https://knetminer.rothamsted.ac.uk/araknet/genepage?list='+id;
		}
	},
	KNETMINER_RICE: {
		label: 'KnetMiner',
		url: function(id) {
			return 'https://knetminer.rothamsted.ac.uk/riceknet/genepage?list='+id;
		}
	},
	KNETMINER_WHEAT: {
		label: 'KnetMiner',
		url: function(id) {
			return 'https://knetminer.rothamsted.ac.uk/wheatknet/genepage?list='+id;
		}
	},
  PUBMED: {
    label: 'PubMed',
    url: function(id) {
      return 'https://pubmed.ncbi.nlm.nih.gov/'+id;
    }
  }
};
