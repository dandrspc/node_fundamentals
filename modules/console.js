console.log('Something')
console.info('Something')
console.error('error')
console.warn('Warning')

var table = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Foo'
    }
]

console.table(table)

console.group('Conversation')
console.log('Hello')
console.log('Bla bla bla bla')
console.log('Bla bla bla bla')
console.log('Bla bla bla bla')
console.groupEnd('Conversation')
console.log('Something else')

const one = () => {
    console.group('Function One')
    console.log('This is from function one')
    console.log('This is from function one')
    two()
    console.log('Go back to function one')
    console.groupEnd('Function One')
}

const two = () => {
    console.group('Function two')
    console.log('This is from function two')
    console.log('This is from function two')
    console.groupEnd('Function two')
}

one()

console.count('times')
console.count('times')
console.count('times')
console.count('times')
console.countReset('times')
console.count('times')