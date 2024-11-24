$(document).ready(function() {
    var fileArr = [];
    
    $("#images").click(function(){
        // Clear existing selected images when user clicks the browse button
        $(this).val("");
        fileArr = [];
        $('#image_preview').html("");
    });
    
    $("#images").change(function(){
        // Check if the total number of files is greater than 3
        var totalFiles = document.getElementById("images").files;
        if (totalFiles.length + fileArr.length > 3) {
            alert("You can only upload up to 3 images.");
            // Clear the file input and preview
            $(this).val("");
            fileArr = [];
            $('#image_preview').html("");
            return;
        }
        
        // Clear previous files if any
        if (fileArr.length > 0) {
            fileArr = [];
            $('#image_preview').html("");
        }
        
        for (var i = 0; i < totalFiles.length; i++) {
            if (totalFiles[i].size > 1048576) {
                return false;
            } else {
                fileArr.push(totalFiles[i]);
                $('#image_preview').append("<div class='img-div' id='img-div"+i+"'><img src='"+URL.createObjectURL(totalFiles[i])+"' class='img-responsive image img-thumbnail' title='"+totalFiles[i].name+"'><div class='middle'><button id='action-icon' value='img-div"+i+"' class='btn btn-danger' role='"+totalFiles[i].name+"'><i class='fa fa-trash'></i></button></div></div>");
            }
        }
    });

    $('body').on('click', '#action-icon', function(evt){
        var divName = this.value;
        var fileName = $(this).attr('role');
        $(`#${divName}`).remove();
      
        for (var i = 0; i < fileArr.length; i++) {
            if (fileArr[i].name === fileName) {
                fileArr.splice(i, 1);
            }
        }
        
        document.getElementById('images').files = FileListItem(fileArr);
        evt.preventDefault();
    });

    function FileListItem(file) {
        file = [].slice.call(Array.isArray(file) ? file : arguments)
        for (var c, b = c = file.length, d = !0; b-- && d;) d = file[b] instanceof File
        if (!d) throw new TypeError("expected argument to FileList is File or array of File objects")
        for (b = (new ClipboardEvent("")).clipboardData || new DataTransfer; c--;) b.items.add(file[c])
        return b.files
    }
});
