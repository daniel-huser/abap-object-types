/**
 * ABAP Object Type mappings between three representations:
 *   PSEUDO  – 4-char type used by tools such as abapGit (may differ from TADIR)
 *   TADIR   – 4-char OBJECT column value in SAP Repository Directory (table TADIR)
 *   ADT     – Type string used by ABAP Development Tools, format "XXXX/YY..."
 *
 * null means: the mapping is known to be absent or could not be determined.
 * Entries marked TODO require manual verification before use.
 */

export interface ObjectTypeMapping {
  pseudo: string;
  /** TADIR OBJECT column value. null = unknown or not stored in TADIR — add manually. */
  tadir: string | null;
  /** ADT URI type segment. null = no known ADT mapping — add manually. */
  adt: string | null;
}

// Sorted alphabetically by pseudo type.
// TADIR differs from pseudo for: FUNC→FUGR, INCL→PROG, STRU→TABL (sub-objects / renamed types).
// SRVB uses TADIR "SRVB" but ADT groups it under "SRVD".
const MAPPINGS: readonly ObjectTypeMapping[] = [
  { pseudo: "AUTH", tadir: "AUTH", adt: "AUTH/AO" },
  { pseudo: "BDEF", tadir: "BDEF", adt: "BDEF/BDO" },
  { pseudo: "CHDO", tadir: "CHDO", adt: "CHDO/CHD" },
  { pseudo: "CHKC", tadir: "CHKC", adt: "CHKC/TYP" },
  { pseudo: "CHKO", tadir: "CHKO", adt: "CHKO/TYP" },
  { pseudo: "CLAS", tadir: "CLAS", adt: "CLAS/OC" },
  { pseudo: "DCLS", tadir: "DCLS", adt: "DCLS/DL" },
  { pseudo: "DDLS", tadir: "DDLS", adt: "DDLS/DF" },
  { pseudo: "CDS_STOB", tadir: "DDLS", adt: "DDLS/DF" }, // Used in ATC & Cloudification Repo
  { pseudo: "CDS_SQL_VIEW", tadir: "DDLS", adt: "DDLS/DF" }, // Used in ATC & Cloudification Repo
  { pseudo: "DEVC", tadir: "DEVC", adt: "DEVC/K" },
  { pseudo: "DIAL", tadir: "DIAL", adt: "DIAL/A" },
  { pseudo: "DOMA", tadir: "DOMA", adt: "DOMA/DD" },
  { pseudo: "DTEL", tadir: "DTEL", adt: "DTEL/DE" },
  { pseudo: "ENHC", tadir: "ENHC", adt: "ENHC/XC" },
  { pseudo: "ENHO", tadir: "ENHO", adt: "ENHO/XHB" },
  { pseudo: "ENHO", tadir: "ENHO", adt: "ENHO/XH" },
  { pseudo: "BADI_DEF", tadir: "ENHO", adt: "ENHO/XB" }, // Used in ATC & Cloudification Repo
  { pseudo: "ENHS", tadir: "ENHS", adt: "ENHS/XS" },
  { pseudo: "FUNC", tadir: null, adt: "FUGR/FF" }, // pseudo type as function modules are not stored in TADIR
  { pseudo: "FUGR", tadir: "FUGR", adt: "FUGR/F" },
  { pseudo: "FORM", tadir: "FORM", adt: "FORM" }, // Not supported in ADT
  { pseudo: "INCL", tadir: "PROG", adt: "PROG/I" }, // include programs are stored as PROG type in TADIR
  { pseudo: "INTF", tadir: "INTF", adt: "INTF/OI" },
  { pseudo: "MSAG", tadir: "MSAG", adt: "MSAG/N" },
  { pseudo: "NROB", tadir: "NROB", adt: "NROB/NRO" },
  { pseudo: "PARA", tadir: "PARA", adt: "PARA/R" },
  { pseudo: "PROG", tadir: "PROG", adt: "PROG/P" },
  { pseudo: "SFPI", tadir: "SFPI", adt: "SFPI/FI" },
  { pseudo: "SHLP", tadir: "SHLP", adt: "SHLP/DH" },
  { pseudo: "SHMA", tadir: "SHMA", adt: "SHMA/SH" },
  { pseudo: "SICF", tadir: "SICF", adt: "SICF/TYP" },
  { pseudo: "SOTR", tadir: "SOTR", adt: "SOTR/OTR" }, // can't validate cause ADT doesn't show any SOTR objects
  { pseudo: "SRVB", tadir: "SRVB", adt: "SRVB/SVB" },
  { pseudo: "SRVD", tadir: "SRVD", adt: "SRVD/SRV" },
  { pseudo: "STRU", tadir: "TABL", adt: "TABL/DS" }, // Structures are stored as TABL type in TADIR
  { pseudo: "SUSO", tadir: "SUSO", adt: "SUSO/B" },
  { pseudo: "SXCI", tadir: "SXCI", adt: "SXCI/XCI" },
  { pseudo: "SXSD", tadir: "SXSD", adt: "SXSD/XSD" },
  { pseudo: "TABL", tadir: "TABL", adt: "TABL/DT" },
  { pseudo: "TOBJ", tadir: "TOBJ", adt: "TOBJ/TOB" },
  { pseudo: "TRAN", tadir: "TRAN", adt: "TRAN/T" },
  { pseudo: "TTYP", tadir: "TTYP", adt: "TTYP/DA" },
  { pseudo: "TYPE", tadir: "TYPE", adt: "TYPE/K" },
  { pseudo: "VIEW", tadir: "VIEW", adt: "VIEW/DV" },
  { pseudo: "WAPA", tadir: "WAPA", adt: "WAPA/WO" },
  { pseudo: "WDCC", tadir: "WDCC", adt: "WDCC/WCI" },
  { pseudo: "XSLT", tadir: "XSLT", adt: "XSLT/VT" },
  { pseudo: "CNTX", tadir: "CNTX", adt: "CNTX" }, // Not supported in ADT
  { pseudo: "ACID", tadir: "ACID", adt: "ACID/AD" },
  { pseudo: "CHKV", tadir: "CHKV", adt: "CHKV/TYP" },
  { pseudo: "DSFD", tadir: "DSFD", adt: "DSFD/SCF" },
  { pseudo: "DSFI", tadir: "DSFI", adt: "DSFI/SFI" },
  { pseudo: "SKTD", tadir: "SKTD", adt: "SKTD/TYP" },
  { pseudo: "DRTY", tadir: "DRTY", adt: "DRTY/STY" },
  { pseudo: "SMTG", tadir: "SMTG", adt: "SMTG" }, // it is actually only SMTG no slash, nothing...
  { pseudo: "FUGS", tadir: "FUGS", adt: "FUGS/FX" },
  { pseudo: "SFPF", tadir: "SFPF", adt: "SFPF/5F" },
  { pseudo: "NONT", tadir: "NONT", adt: "NONT/NOT" },
  { pseudo: "RONT", tadir: "RONT", adt: "RONT/ROT" },
  { pseudo: "CFDB", tadir: "CFDB", adt: "CFDB/CFB" },
  { pseudo: "FDT0", tadir: "FDT0", adt: "FDT0/APP" },
  { pseudo: "G4BA", tadir: "G4BA", adt: "G4BA" }, // Not supported in ADT => SRVB and SRVD are used instead
  { pseudo: "IDOC", tadir: "IDOC", adt: "IDOC" }, // Not supported in ADT
];

function findByPseudo(pseudo: string): ObjectTypeMapping {
  const m = MAPPINGS.find((m) => m.pseudo === pseudo);
  if (!m) throw new Error(`No mapping for pseudo type: ${pseudo}`);
  return m;
}

function findByTadir(tadir: string): ObjectTypeMapping {
  // Note: INCL and PROG both map to TADIR "PROG"; STRU and TABL both map to TADIR "TABL".
  // This returns the first match, which may be ambiguous for those shared TADIR types.
  const m = MAPPINGS.find((m) => m.tadir === tadir);
  if (!m) throw new Error(`No mapping for TADIR type: ${tadir}`);
  return m;
}

function findByAdt(adt: string): ObjectTypeMapping {
  const m = MAPPINGS.find((m) => m.adt === adt);
  if (!m) throw new Error(`No mapping for ADT type: ${adt}`);
  return m;
}

export function pseudoToTadir(pseudo: string): string {
  const m = findByPseudo(pseudo);
  if (m.tadir === null)
    throw new Error(`No TADIR mapping for pseudo type: ${pseudo}`);
  return m.tadir;
}

export function pseudoToAdt(pseudo: string): string {
  const m = findByPseudo(pseudo);
  if (m.adt === null)
    throw new Error(`No ADT mapping for pseudo type: ${pseudo}`);
  return m.adt;
}

export function tadirToPseudo(tadir: string): string {
  return findByTadir(tadir).pseudo;
}

export function tadirToAdt(tadir: string): string {
  const m = findByTadir(tadir);
  if (m.adt === null)
    throw new Error(`No ADT mapping for TADIR type: ${tadir}`);
  return m.adt;
}

export function adtToPseudo(adt: string): string {
  return findByAdt(adt).pseudo;
}

export function adtToTadir(adt: string): string {
  const m = findByAdt(adt);
  if (m.tadir === null)
    throw new Error(`No TADIR mapping for ADT type: ${adt}`);
  return m.tadir;
}
