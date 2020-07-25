const mysql = require('mysql')
const inquirer = require('inquirer')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'top_songsDB',
})

connection.connect(err => {
  if (err) throw err
  console.log(`Connect on thread ${connection.threadId}`)
  initialPrompts()
})

function initialPrompts() {
  inquirer.prompt([
    {
      name: 'action',
      message: 'What do you want to do?',
      type: 'list',
      choices: [
        'ARTIST SEARCH',
        'MULTI SEARCH',
        'RANGE SEARCH',
        'SONG SEARCH',
        'EXIT'
      ]
    }
  ]).then(answer => {
    switch (answer.action) {
      case 'ARTIST SEARCH':
        artistSearch()
        break
      case 'MULTI SEARCH':
        multiSearch()
        break
      case 'RANGE SEARCH':
        rangeSearch()
        break
      case 'SONG SEARCH':
        songSearch()
        break
      default:
        connection.end()
        process.exit()
    }
  })
}

function artistSearch() {
  console.log('Searching artist....')
  initialPrompts()
}

// * A query which returns all artists who appear within the top 5000 more than once
function multiSearch() {
  console.log('Multisearch.....')
  initialPrompts()
}

// * A query which returns all data contained within a specific range
function rangeSearch() {
  console.log('Reach search...')
  initialPrompts()
}

function songSearch() {
  console.log('Searching song...')
  initialPrompts()
}