# input file name

```js
$('[name=file]').on('change', function(){ // 적용할 input에 공통된 name주기
    if(this.files[0] !== undefined) { // 파일 첨부 창에서 취소를 누르더더라도 오류나지 않게
		var fileName = this.files[0].name; // 첨부된 파일의 이름
		var span = $(this).siblings('span'); // label >span
		var button = $(this).siblings('button'); // label >button

        span.text(fileName);
        button.text('파일첨부 완료');
	}
});

```