function bookList() {
    $(".change-readed").on("click", function (event) {
        var id = $(this).data("id");
        var newState = {
            readed: true
        };

        $.ajax("/api/books/update/" + id, {
            type: "PUT",
            data: newState
        }).then(
            function () {
                console.log(newState);
                location.reload();
            });

    });

    $(".new-book-form").on("submit", function (event) {
        event.preventDefault();

        var title = $("[name=title]").val().trim();
        var author = $("[name=author]").val().trim();
        var newBook = {
            title: title,
            author: author,
            readed: 0
        };
        if (title == "" || author == "") {
            alert("Please include both title and author");
        }
        else {
            console.log(newBook);
            $.ajax("/api/books", {
                type: "POST",
                data: newBook
            }).then(function () {
                console.log(newBook);
                location.reload();
            });
        }
    })
};

$(document).ready(bookList());
