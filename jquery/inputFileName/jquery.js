$('[name=file]').on('change', function(){
    console.log(this)
    if(this.files[0] !== undefined) {
		var fileName = this.files[0].name;
		var span = $(this).siblings('span');
		var button = $(this).siblings('button');

        span.text(fileName);
        button.text('파일첨부 완료');
	}
});
