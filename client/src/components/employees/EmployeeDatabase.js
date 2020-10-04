import React from 'react';
import { Link } from 'react-router-dom';


const EmployeeDatabase = () => {
	return (
		<div className="content-area--main-wrap">
			<div className="content-area--container-fluid">
				<div className="row">
					<div className="col-md-8">
						<div className="card">
							<div className="card--header">
								<h3 className="card--header__title-md">Card Title</h3>
							</div>
							<div className="card--body">
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the
									industry's standard dummy text ever since the 1500s,
									when an unknown printer took a galley of type and
									scrambled it to make a type specimen book. It has
									survived not only five centuries, but also the leap into
									electronic typesetting, remaining essentially unchanged.
									It was popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum passages, and
									more recently with desktop publishing software like
									Aldus PageMaker including versions of Lorem Ipsum.
										</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card">
							<div className="card--body card--body-hr-2">
								<div className="employee-database--search-wrap">
									<button className="btn-search btn-search-emp-database">
										<i className="fa fa-search"></i>
									</button>
									<input type="text" className="search-field" />
								</div>
							</div>
							<div className="card--body__no-pd">
								<div className="employee-database--profile-list-wrap">

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default EmployeeDatabase;
