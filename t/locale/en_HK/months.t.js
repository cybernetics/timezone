require('proof')(24, function (assert) {
    var tz = require('timezone')(require('timezone/en_HK'))

    // en_HK abbreviated months
    assert(tz('2000-01-01', '%b', 'en_HK'), 'Jan', 'Jan')
    assert(tz('2000-02-01', '%b', 'en_HK'), 'Feb', 'Feb')
    assert(tz('2000-03-01', '%b', 'en_HK'), 'Mar', 'Mar')
    assert(tz('2000-04-01', '%b', 'en_HK'), 'Apr', 'Apr')
    assert(tz('2000-05-01', '%b', 'en_HK'), 'May', 'May')
    assert(tz('2000-06-01', '%b', 'en_HK'), 'Jun', 'Jun')
    assert(tz('2000-07-01', '%b', 'en_HK'), 'Jul', 'Jul')
    assert(tz('2000-08-01', '%b', 'en_HK'), 'Aug', 'Aug')
    assert(tz('2000-09-01', '%b', 'en_HK'), 'Sep', 'Sep')
    assert(tz('2000-10-01', '%b', 'en_HK'), 'Oct', 'Oct')
    assert(tz('2000-11-01', '%b', 'en_HK'), 'Nov', 'Nov')
    assert(tz('2000-12-01', '%b', 'en_HK'), 'Dec', 'Dec')

    // ' + name + ' months
    assert(tz('2000-01-01', '%B', 'en_HK'), 'January', 'January')
    assert(tz('2000-02-01', '%B', 'en_HK'), 'February', 'February')
    assert(tz('2000-03-01', '%B', 'en_HK'), 'March', 'March')
    assert(tz('2000-04-01', '%B', 'en_HK'), 'April', 'April')
    assert(tz('2000-05-01', '%B', 'en_HK'), 'May', 'May')
    assert(tz('2000-06-01', '%B', 'en_HK'), 'June', 'June')
    assert(tz('2000-07-01', '%B', 'en_HK'), 'July', 'July')
    assert(tz('2000-08-01', '%B', 'en_HK'), 'August', 'August')
    assert(tz('2000-09-01', '%B', 'en_HK'), 'September', 'September')
    assert(tz('2000-10-01', '%B', 'en_HK'), 'October', 'October')
    assert(tz('2000-11-01', '%B', 'en_HK'), 'November', 'November')
    assert(tz('2000-12-01', '%B', 'en_HK'), 'December', 'December')
})