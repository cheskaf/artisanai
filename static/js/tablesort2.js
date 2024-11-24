$(function() {
    $('#rowtable').bootstrapTable()
})

var $tableStitches = $('#tableStitches')
var $sortStitches = $('#sortStitches')

$(function() {
    $sortStitches.change(function() {
    var field = ''
    var sortOrder = ''

    if (this.value == 'lastupdated_sort') {
        field = 'dateupdated'
        sortOrder = 'desc'
    } else if (this.value == 'oldest_sort') {
        field = 'dateupdated'
        sortOrder = 'asc'
    } else if (this.value == 'stitchName_asc') {
        field = 'stitchName'
        sortOrder = 'asc'
    } else if (this.value == 'stitchName_desc') {
        field = 'stitchName'
        sortOrder = 'desc'
    } 

    $tableStitches.bootstrapTable('sortBy', {
        field: field,
        sortOrder: sortOrder
    })
    })
})

var $tableAbbreviations = $('#tableAbbreviations')
var $sortAbbreviations = $('#sortAbbreviations')

$(function() {
    $sortAbbreviations.change(function() {
    var field = ''
    var sortOrder = ''

    if (this.value == 'lastupdated_sort') {
        field = 'dateupdated'
        sortOrder = 'desc'
    } else if (this.value == 'oldest_sort') {
        field = 'dateupdated'
        sortOrder = 'asc'
    } else if (this.value == 'crochetabbreviation_asc') {
        field = 'crochetabbreviation'
        sortOrder = 'asc'
    } else if (this.value == 'crochetabbreviation_desc') {
        field = 'crochetabbreviation'
        sortOrder = 'desc'
    } else if (this.value == 'crochetterm_asc') {
        field = 'crochetterm'
        sortOrder = 'asc'
    } else if (this.value == 'crochetterm_desc') {
        field = 'crochetterm'
        sortOrder = 'desc'
    } 

    $tableAbbreviations.bootstrapTable('sortBy', {
        field: field,
        sortOrder: sortOrder
    })
    })
})