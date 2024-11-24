$(function() {
    $('#rowtable').bootstrapTable()
})

var $table = $('#table')
var $sort = $('#sort')

$(function() {
    $sort.change(function() {
    var field = ''
    var sortOrder = ''

    if (this.value == 'datesubmitted_asc') {
        field = 'datesubmitted'
        sortOrder = 'asc'
    } else if (this.value == 'datesubmitted_desc') {
        field = 'datesubmitted'
        sortOrder = 'desc'
    } else if (this.value == 'reportcategory_sort') {
        field = 'reportcategory'
        sortOrder = 'asc'
    } else if (this.value == 'reportstatus_sort') {
        field = 'reportstatus'
        sortOrder = 'desc'
    } else if (this.value == 'lastactivedate_asc') {
        field = 'lastactivedate'
        sortOrder = 'asc'
    } else if (this.value == 'lastactivedate_desc') {
        field = 'lastactivedate'
        sortOrder = 'desc'
    } else if (this.value == 'inactiveuser_asc') {
        field = 'inactiveuser'
        sortOrder = 'asc'
    } else if (this.value == 'inactiveuser_desc') {
        field = 'inactiveuser'
        sortOrder = 'desc'
    } else if (this.value == 'lastupdateddate_asc') {
        field = 'lastupdateddate'
        sortOrder = 'asc'
    } else if (this.value == 'lastupdateddate_desc') {
        field = 'lastupdateddate'
        sortOrder = 'desc'
    } else if (this.value == 'themename_asc') {
        field = 'themename'
        sortOrder = 'asc'
    } else if (this.value == 'themename_desc') {
        field = 'themename'
        sortOrder = 'desc'
    } else if (this.value == 'status_sort') {
        field = 'themestatus'
        sortOrder = 'asc'
    }

    $table.bootstrapTable('sortBy', {
        field: field,
        sortOrder: sortOrder
    })
    })
})

var $table2 = $('#table2')
var $sort2 = $('#sort2')

$(function() {
    $sort2.change(function() {
    var field = ''
    var sortOrder = ''

    if (this.value == 'datesubmitted_asc') {
        field = 'datesubmitted'
        sortOrder = 'asc'
    } else if (this.value == 'datesubmitted_desc') {
        field = 'datesubmitted'
        sortOrder = 'desc'
    } else if (this.value == 'reportcategory_sort') {
        field = 'reportcategory'
        sortOrder = 'asc'
    } else if (this.value == 'reportstatus_sort') {
        field = 'reportstatus'
        sortOrder = 'desc'
    } 

    $table2.bootstrapTable('sortBy', {
        field: field,
        sortOrder: sortOrder
    })
    })
})

var $table3 = $('#table3')
var $sort3 = $('#sort3')

$(function() {
    $sort3.change(function() {
    var field = ''
    var sortOrder = ''

    if (this.value == 'datesubmitted_asc') {
        field = 'datesubmitted'
        sortOrder = 'asc'
    } else if (this.value == 'datesubmitted_desc') {
        field = 'datesubmitted'
        sortOrder = 'desc'
    } else if (this.value == 'reportcategory_sort') {
        field = 'reportcategory'
        sortOrder = 'asc'
    } else if (this.value == 'reportstatus_sort') {
        field = 'reportstatus'
        sortOrder = 'desc'
    } 

    $table3.bootstrapTable('sortBy', {
        field: field,
        sortOrder: sortOrder
    })
    })
})

var $table4 = $('#table4')
var $sort4 = $('#sort4')

$(function() {
    $sort4.change(function() {
    var field = ''
    var sortOrder = ''

    if (this.value == 'datesubmitted_asc') {
        field = 'datesubmitted'
        sortOrder = 'asc'
    } else if (this.value == 'datesubmitted_desc') {
        field = 'datesubmitted'
        sortOrder = 'desc'
    } else if (this.value == 'reportcategory_sort') {
        field = 'reportcategory'
        sortOrder = 'asc'
    } else if (this.value == 'reportstatus_sort') {
        field = 'reportstatus'
        sortOrder = 'desc'
    } 

    $table4.bootstrapTable('sortBy', {
        field: field,
        sortOrder: sortOrder
    })
    })
})