import React from 'react'
import logo from '../assets/images/mlh-prep.png'
const MainNavbar = () => {
  return (
    <>
    <div className='h-70 max-w bg-blue-900 align-center mt-0 pt-5'>
      <img style={{width:"130px"}} src={logo}/>
      </div>
      <nav class="navbar navbar-expand-xl navbar-light bg-light">
	<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span class="navbar-toggler-icon"></span>
	</button>
	
	<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
		<div class="navbar-nav">
			<a href="#" class="nav-item nav-link disable">SEARCH What's on your mind</a>
		</div> 
		<form class="navbar-form form-inline" style={{paddingLeft:"300px"}}>
			<div class="input-group search-box">								
				<input type="text" id="search" class="form-control" placeholder="Search"/>
				<span class="input-group-addon"><i class="material-icons">&#xE8B6;</i></span>
			</div>
		</form>
		<div class="navbar-nav ml-auto">
			<div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle user-action"><img src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg" class="avatar" alt="Avatar"/> Paula Wilson <b class="caret"></b></a>
				<div class="dropdown-menu">
					<a href="#" class="dropdown-item"><i class="fa fa-user-o"></i> Profile</a>
					<div class="dropdown-divider"></div>
					<a href="#" class="dropdown-item"><i class="material-icons">&#xE8AC;</i> Logout</a>
				</div>
			</div>
		</div>
	</div>
</nav>
  
   </>
  )
}

export default MainNavbar
