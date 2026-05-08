# Mapping of ABAP Object Types

## Disclaimer
This Project is provided as open-source under the MIT license.
No Support, no SLAs and no responsibility for any errors.
Please use at own risk.
This project is not related or endorsed by SAP or any organisation owned by SAP.

## Motivation

This is an approach to help wrangle with the history of "ABAP Object Types".
As ABAP Objects are defined by a name, but that name is only unique with the corresponding Object Type, we (and especially AI) always need such type to identify objects.
Unfortunatly ABAP Objects are not all the same.

## Explanation

### TADIR
There is the TADIR Object Type value, which is a 4-char UPPERCASE value and there are hundreds of different ones.
Unforunatly there are some historical edge-cases, cause for example Function Modules are not even registered in TADIR.
So if you ever see the Type FUNC, this is just a "pseudo" object type.
Also both Database tables and DDIC Structures are stored under the same type (TABL), besides they are completly different objects.
Some Objects also have multiple TADIR entries (e.g. CDS Views have a VIEW and a DDLS entry) for the same "object" shown in ADT/SE80.

### ADT

Another approach on ABAP Object Types is done in ADT, cause there the API also uses an Object Type.
To get around some of the limitations of TADIR, ADT uses an approach which consists of a 4-char UPPERCASE value, followed by a / and some additional info.
As Function Modules are always based on a Function Group (FUGR) their ADT Type is for example "FUGR/FF", while the Function Group has "FUGF/F".
Tables and structures are also seperated as "TABL/DT" and "TABL/DS".

Great, right? As the ADT covers the quirks, we can then only use that one?
Unfortunatly not, because not all object types are supported by ADT and some APIs in ADT also use another set of Types.
For the sake of this project and due to lack of a better name, I call them the:

### Pseudo
When you search ABAP Objects in ADT, you can see that the type: filter uses also 4 CHAR uppercase values.
Including such values as FUNC or INCL (for Includes), despite them not existing in TADIR.
They are not using the ADT Types with the Slash neither.

I now try to create a mapping between all those values in this project.
If you want to contribute and add/correct values, feel free to PR.

