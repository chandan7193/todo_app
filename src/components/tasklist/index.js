import React from 'react';
import {connect} from 'react-redux';

class TaskList extends React.Component{
	render(){
		return(
			<table>
				<thead>
					<tr>
						<th><p>Tasks</p></th>
						<th><p>Action</p></th>
					</tr>
				</thead>
				<tbody>
					{this.props.tasks.map((task,index)=><Task key={index} task={task} />)}
				</tbody>

			</table>
			);
	}
}

function mapStateToProps(state){
	return {
		tasks:state.tasks
	}
}

export default connect(mapStateToProps)(TaskList);