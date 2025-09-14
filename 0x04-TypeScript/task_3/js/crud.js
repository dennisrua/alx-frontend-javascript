// task_3/js/crud.js
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}

// task_3/js/crud.d.ts

// Define the RowID type as a number
// type RowID = number;

// Define the RowElement interface
// interface RowElement {
// firstName: string;
// lastName: string;
// age: number;
// }

// Declare the 3 functions using RowID and RowElement
// declare function insertRow(row: RowElement): number;
// declare function deleteRow(rowId: RowID): void;
// declare function updateRow(rowId: RowID, row: RowElement): RowID;
