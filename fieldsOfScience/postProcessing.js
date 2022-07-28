import { readJSON, writeJSON, writeCSV } from 'https://deno.land/x/flat/mod.ts'

// The filename is the first invocation argument
const filename = Deno.args[0] // Same name as downloaded_filename
const data = await readJSON(filename)

// Pluck a specific key off
// and write it out to a different file
// Careful! any uncaught errors and the workflow will fail, committing nothing.
const newfile = `${filename}`
// await writeJSON(newfile, data.path.to.something)
var r = data.data.datasets.subjects.map(obj => ({ ...obj, date: new Date().toLocaleDateString() }))

await writeJSON(newfile, r)