<template>
    <div>       
        <header class="header"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>   
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.1.6/dist/vue-multiselect.min.css">
     <i class="fa fa-user" id="user" aria-hidden="true" style="font-size:20px;color:black;text-align: center;">&nbsp;<button class="btn">Brundha</button> </i>
       <p style="font-family:cursive;font-size:40px;"><b>Claims</b> </p>
       <div class="topnav">           
  <a class="active" href="#open" @click="open()">Open</a>
  <a href="#completed"  iscompleted='true' @click="completed()">Completed</a>
  <a href="#rejected"  isRejected='true' @click="Rejected()">Rejected</a>   
</div>
<div class="sidenav">
        <br/>
        <br/>
  <a href="http://localhost:8080/finance" style="font-family:cursive;margin-right:20px;font-size:20px;color:white;"> Claims are waiting for your approval in this page..!</a>
  <br/>
  <br/>
  </div>
  </header>
  </div>
  </template>
  <script src="/Users/brundha/Documents/vue/project/my-project/src/components/finance.js">    </script>
  <style scoped>
  @import '/Users/brundha/Documents/vue/project/my-project/src/components/finance.css'
  </style>