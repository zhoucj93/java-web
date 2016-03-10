<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="com.bank.model.Messages,com.bank.dao.MessagesDao"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html lang="zh-cn">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<!-- Title and other stuffs -->
<title>欢迎使用我的网银</title>
<meta name="keywords" content="Bootstrap后台管理系统" />
<meta name="description" content="Bootstrap后台管理系统" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author" content="">
<!-- Stylesheets -->
<link href="style/bootstrap.css" rel="stylesheet">
<!-- Font awesome icon -->
<link rel="stylesheet" href="style/font-awesome.css">
<!-- jQuery UI -->
<link rel="stylesheet" href="style/jquery-ui.css">
<!-- Calendar -->
<link rel="stylesheet" href="style/fullcalendar.css">
<!-- prettyPhoto -->
<link rel="stylesheet" href="style/prettyPhoto.css">
<!-- Star rating -->
<link rel="stylesheet" href="style/rateit.css">
<!-- Date picker -->
<link rel="stylesheet" href="style/bootstrap-datetimepicker.min.css">
<!-- CLEditor -->
<link rel="stylesheet" href="style/jquery.cleditor.css">
<!-- Uniform -->
<link rel="stylesheet" href="style/uniform.default.css">
<!-- Bootstrap toggle -->
<link rel="stylesheet" href="style/bootstrap-switch.css">
<!-- Main stylesheet -->
<link href="style/style.css" rel="stylesheet">
<!-- Widgets stylesheet -->
<link href="style/widgets.css" rel="stylesheet">

<!-- HTML5 Support for IE -->
<!--[if lt IE 9]>
	  <script src="js/html5shim.js"></script>
	  <![endif]-->

<!-- Favicon -->
<link rel="shortcut icon" href="img/favicon/favicon.png">

</head>

<body>
	<div class="navbar navbar-fixed-top bs-docs-nav" role="banner">

		<div class="conjtainer">
			<!-- Menu button for smallar screens -->
			<div class="navbar-header">
				<button class="navbar-toggle btn-navbar" type="button"
					data-toggle="collapse" data-target=".bs-navbar-collapse">
					<span>Menu</span>
				</button>
				<!-- Site name for smallar screens -->
				<a href="index.html" class="navbar-brand hidden-lg">Bank</a>
			</div>



			<!-- Navigation starts -->
			<nav class="collapse navbar-collapse bs-navbar-collapse"
				role="navigation">

				<ul class="nav navbar-nav">

					<!-- Upload to server link. Class "dropdown-big" creates big dropdown -->
					<li class="dropdown dropdown-big">
						<!-- Dropdown -->
						<ul class="dropdown-menu">
							<li>
								<!-- Progress bar -->
								<p>Photo Upload in Progress</p> <!-- Bootstrap progress bar -->
								<div class="progress progress-striped active">
									<div class="progress-bar progress-bar-info" role="progressbar"
										aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
										style="width: 40%">
										<span class="sr-only">40% Complete</span>
									</div>
								</div>

								<hr /> <!-- Progress bar -->
								<p>Video Upload in Progress</p> <!-- Bootstrap progress bar -->
								<div class="progress progress-striped active">
									<div class="progress-bar progress-bar-success"
										role="progressbar" aria-valuenow="80" aria-valuemin="0"
										aria-valuemax="100" style="width: 80%">
										<span class="sr-only">80% Complete</span>
									</div>
								</div>

								<hr /> <!-- Dropdown menu footer -->
								<div class="drop-foot">
									<a href="#">View All</a>
								</div></li>
						</ul></li>

					<!-- Sync to server link -->
					<li class="dropdown dropdown-big">
						<!-- Dropdown -->
						<ul class="dropdown-menu">
							<li>
								<!-- Dropdown menu footer -->
								<div class="drop-foot">
									<a href="#">View All</a>
								</div></li>
						</ul></li>

				</ul>


				<!-- Links -->
				<ul class="nav navbar-nav pull-right">
					<li class="dropdown pull-right"><a data-toggle="dropdown"
						class="dropdown-toggle" href="#"> <i class="icon-user"></i>
							<%=request.getSession().getAttribute("account") %> <b class="caret"></b> </a> <!-- Dropdown menu -->
						<ul class="dropdown-menu">
						<li><a href="showuser.jsp"><i class="icon-user"></i>个人信息</a></li>
							<li><a href="setting.jsp"><i class="icon-cogs"></i> 修改密码</a>
							</li>
							<li><a href="login.jsp"><i class="icon-off"></i> 退出</a>
							</li>
						</ul></li>

				</ul>
			</nav>

		</div>
	</div>
	<!-- Header starts -->
	<header>
		<div class="container">
			<div class="row">

				<!-- Logo section -->
				<div class="col-md-4">
					<!-- Logo. -->
					<div class="logo">
						<h1>
							<a href="#">Bank<span class="bold"></span>
							</a>
						</h1>
						<p class="meta">我的网银系统</p>
					</div>
					<!-- Logo ends -->
				</div>

				<!-- Button section -->
				<div class="col-md-4">

					<!-- Buttons -->
					<ul class="nav nav-pills">





					</ul>

				</div>

				<!-- Data section -->

				<div class="col-md-4">
					<div class="header-data">


					</div>
				</div>

			</div>
		</div>
	</header>

	<!-- Header ends -->

	<!-- Main content starts -->

	<div class="content">

		<!-- Sidebar -->
		<div class="sidebar">
			<div class="sidebar-dropdown">
				<a href="#">Navigation</a>
			</div>

			<!--- Sidebar navigation -->
			<!-- If the main navigation has sub navigation, then add the class "has_sub" to "li" of main navigation. -->
			<ul id="nav">
				<!-- Main menu with font awesome icon -->
				<li><a href="mycard.jsp"><i class="icon-bar-chart"></i>
						我的账户</a>
				</li>
				<li><a href="messages.jsp" class="open"><i class="icon-table"></i>
						查看信息</a>
				</li>
				<li><a href="getmoney.jsp"><i class="icon-magic"></i> 取款功能 </a>
				</li>
				<li><a href="turnmoney.jsp"><i class="icon-tasks"></i> 转账功能</a>
				</li>
			</ul>
		</div>

		<!-- Sidebar ends -->

		<!-- Main bar -->
		<div class="mainbar">

			<!-- Page heading -->
			<div class="page-head">
				<h2 class="pull-left">
					<i class="icon-table"></i> 查看信息
				</h2>


				<div class="clearfix"></div>

			</div>
			<!-- Page heading ends -->

			<!-- Matter -->

			<div class="matter">
				<div class="container">

					<!-- Table -->

					<div class="row">

						<div class="col-md-12">

							<div class="widget">

								<div class="widget-head">
									<div class="pull-left">取款信息</div>
									<div class="widget-icons pull-right">
										<a href="#" class="wminimize"><i class="icon-chevron-up"></i>
										</a> <a href="#" class="wclose"><i class="icon-remove"></i>
										</a>
									</div>
									<div class="clearfix"></div>
								</div>

								<div class="widget-content">

									<table class="table table-striped table-bordered table-hover">
										<thead>
											<tr>
												<th>序号</th>
												<th>创建时间</th>
												<th>金额（元）</th>
												<th>类型</th>
												<th>状态</th>
											</tr>
										</thead>
										<tbody>
											<tbody>
											<%
												String account = request.getSession().getAttribute("account")
														.toString();
												MessagesDao messagesdao = new MessagesDao();
												ArrayList<Messages> list = new ArrayList();
												list = messagesdao.ShowAllGetMessages(account);
												for (int i = 0; i < list.size(); i++) {
											%>
											<tr>
												<td><%=list.get(i).getMessageid()%></td>
												<td><%=list.get(i).getCreattime()%></td>
												<td><%=list.get(i).getMoney()%></td>
												<td><%=list.get(i).getMessagetext()%></td>
												<td>
													<%
														if (list.get(i).getStatus() == 1) {
													%> <span
													class="label label-success">成功</span> <%
 													} else {
 													%> <span class="label label-danger">失败</span></td>
												<%
													}
												%>												
											</tr>
											<%
												}
											%>
										</tbody>
										</tbody>
									</table>

									<div class="widget-foot">
										<div class="clearfix"></div>

									</div>

								</div>
							</div>
						</div>

					</div>
					
						<div class="row">

						<div class="col-md-12">

							<div class="widget">

								<div class="widget-head">
									<div class="pull-left">转账信息</div>
									<div class="widget-icons pull-right">
										<a href="#" class="wminimize"><i class="icon-chevron-up"></i>
										</a> <a href="#" class="wclose"><i class="icon-remove"></i>
										</a>
									</div>
									<div class="clearfix"></div>
								</div>

								<div class="widget-content">

									<table class="table table-striped table-bordered table-hover">
										<thead>
											<tr>
												<th>序号</th>
												<th>发款账户</th>
												<th>收款账户</th>
												<th>创建时间</th>
												<th>金额（元）</th>
												<th>类型</th>
												<th>状态</th>
											</tr>
										</thead>
										<tbody>
											<tbody>
											<%
												String account1 = request.getSession().getAttribute("account")
														.toString();
												MessagesDao messagesdao1 = new MessagesDao();
												ArrayList<Messages> list1 = new ArrayList();
												ArrayList<Messages> list2 = new ArrayList();
												list1 = messagesdao.ShowAllFromMessages(account1);
												list2 = messagesdao.ShowAllToMessages(account1);
												for (int i = 0; i < list1.size(); i++) {
											%>
											<tr>
												<td><%=list1.get(i).getMessageid()%></td>
												<td><%=list1.get(i).getFromaccount()%></td>
												<td><%=list1.get(i).getToaccount()%></td>
												<td><%=list1.get(i).getCreattime()%></td>
												<td><%=list1.get(i).getMoney()%></td>
												<td><%=list1.get(i).getMessagetext()%></td>
												<td>
													<%
														if (list1.get(i).getStatus() == 1) {
													%> <span
													class="label label-success">成功</span> <%
 													} else {
 													%> <span class="label label-danger">失败</span></td>
												<%
													}
												%>												
											</tr>
											<%
												}for (int i = 0; i < list2.size(); i++) {
													%>
													<tr>
														<td><%=list2.get(i).getMessageid()%></td>
														<td><%=list2.get(i).getFromaccount()%></td>
														<td><%=list2.get(i).getToaccount()%></td>
														<td><%=list2.get(i).getCreattime()%></td>
														<td><%=list2.get(i).getMoney()%></td>
														<td><%=list2.get(i).getMessagetext()%></td>
														<td>
															<%
																if (list2.get(i).getStatus() == 1) {
															%> <span
															class="label label-success">成功</span> <%
		 													} else {
		 													%> <span class="label label-danger">失败</span></td>
														<%
															}
														%>												
													</tr>
													<%
														}
												
											%>
										</tbody>
										</tbody>
									</table>

									<div class="widget-foot">
										<div class="clearfix"></div>

									</div>

								</div>
							</div>
						</div>

					</div>


				</div>
			</div>

			<!-- Matter ends -->

		</div>

		<!-- Mainbar ends -->
		<div class="clearfix"></div>

	</div>
	<!-- Content ends -->

	<!-- Footer starts -->
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<!-- Copyright info -->
					<p class="copy">
						Copyright &copy; 2015 | <a href="mycard.jsp">My Bank</a>
					</p>
				</div>
			</div>
		</div>
	</footer>

	<!-- Footer ends -->

	<!-- Scroll to top -->
	<span class="totop"><a href="#"><i class="icon-chevron-up"></i>
	</a>
	</span>

	<!-- JS -->
	<script src="js/jquery.js"></script>
	<!-- jQuery -->
	<script src="js/bootstrap.js"></script>
	<!-- Bootstrap -->
	<script src="js/jquery-ui-1.9.2.custom.min.js"></script>
	<!-- jQuery UI -->
	<script src="js/fullcalendar.min.js"></script>
	<!-- Full Google Calendar - Calendar -->
	<script src="js/jquery.rateit.min.js"></script>
	<!-- RateIt - Star rating -->
	<script src="js/jquery.prettyPhoto.js"></script>
	<!-- prettyPhoto -->

	<!-- jQuery Flot -->
	<script src="js/excanvas.min.js"></script>
	<script src="js/jquery.flot.js"></script>
	<script src="js/jquery.flot.resize.js"></script>
	<script src="js/jquery.flot.pie.js"></script>
	<script src="js/jquery.flot.stack.js"></script>

	<!-- jQuery Notification - Noty -->
	<script src="js/jquery.noty.js"></script>
	<!-- jQuery Notify -->
	<script src="js/themes/default.js"></script>
	<!-- jQuery Notify -->
	<script src="js/layouts/bottom.js"></script>
	<!-- jQuery Notify -->
	<script src="js/layouts/topRight.js"></script>
	<!-- jQuery Notify -->
	<script src="js/layouts/top.js"></script>
	<!-- jQuery Notify -->
	<!-- jQuery Notification ends -->

	<script src="js/sparklines.js"></script>
	<!-- Sparklines -->
	<script src="js/jquery.cleditor.min.js"></script>
	<!-- CLEditor -->
	<script src="js/bootstrap-datetimepicker.min.js"></script>
	<!-- Date picker -->
	<script src="js/jquery.uniform.min.js"></script>
	<!-- jQuery Uniform -->
	<script src="js/bootstrap-switch.min.js"></script>
	<!-- Bootstrap Toggle -->
	<script src="js/filter.js"></script>
	<!-- Filter for support page -->
	<script src="js/custom.js"></script>
	<!-- Custom codes -->
	<script src="js/charts.js"></script>
	<!-- Charts & Graphs -->
</body>
</html>
