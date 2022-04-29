<script>
    var btn = document.createElement('button');
    btn.addEventListener('click', function(){
     alert('testing');
    });

    document.getElementByTagName('body')[0].append(btn);
</script>
