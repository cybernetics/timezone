require('proof')(24, function (assert) {
    var tz = require('timezone')(require('timezone/ca_ES'))

    // ca_ES abbreviated months
    assert(tz('2000-01-01', '%b', 'ca_ES'), 'gen', 'Jan')
    assert(tz('2000-02-01', '%b', 'ca_ES'), 'feb', 'Feb')
    assert(tz('2000-03-01', '%b', 'ca_ES'), 'mar', 'Mar')
    assert(tz('2000-04-01', '%b', 'ca_ES'), 'abr', 'Apr')
    assert(tz('2000-05-01', '%b', 'ca_ES'), 'mai', 'May')
    assert(tz('2000-06-01', '%b', 'ca_ES'), 'jun', 'Jun')
    assert(tz('2000-07-01', '%b', 'ca_ES'), 'jul', 'Jul')
    assert(tz('2000-08-01', '%b', 'ca_ES'), 'ago', 'Aug')
    assert(tz('2000-09-01', '%b', 'ca_ES'), 'set', 'Sep')
    assert(tz('2000-10-01', '%b', 'ca_ES'), 'oct', 'Oct')
    assert(tz('2000-11-01', '%b', 'ca_ES'), 'nov', 'Nov')
    assert(tz('2000-12-01', '%b', 'ca_ES'), 'des', 'Dec')

    // ' + name + ' months
    assert(tz('2000-01-01', '%B', 'ca_ES'), 'gener', 'January')
    assert(tz('2000-02-01', '%B', 'ca_ES'), 'febrer', 'February')
    assert(tz('2000-03-01', '%B', 'ca_ES'), 'març', 'March')
    assert(tz('2000-04-01', '%B', 'ca_ES'), 'abril', 'April')
    assert(tz('2000-05-01', '%B', 'ca_ES'), 'maig', 'May')
    assert(tz('2000-06-01', '%B', 'ca_ES'), 'juny', 'June')
    assert(tz('2000-07-01', '%B', 'ca_ES'), 'juliol', 'July')
    assert(tz('2000-08-01', '%B', 'ca_ES'), 'agost', 'August')
    assert(tz('2000-09-01', '%B', 'ca_ES'), 'setembre', 'September')
    assert(tz('2000-10-01', '%B', 'ca_ES'), 'octubre', 'October')
    assert(tz('2000-11-01', '%B', 'ca_ES'), 'novembre', 'November')
    assert(tz('2000-12-01', '%B', 'ca_ES'), 'desembre', 'December')
})
