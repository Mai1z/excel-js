const CODES = {
    A: 65,
    Z: 95,
}

export function createTable(rowsCount = 10) {
    const colsCount = CODES.Z - CODES.A
    return '<h1>Table</h1>'
}
