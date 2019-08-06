import Nav from './children/Nav'
import React, { Component } from 'react';
require('./trips.css');
import Nav from '../children/Nav';
import Login from '../Login';
import NewTrip from '../children/NewTrips/NewTrip';

export default class Trip extends Component {
<div class="all-trips-container container">
	
	<div class="row">
		{{#if trip }}
		{{#each trip}}
		<div class="trip-container col-xs-12 col-sm-6 col-lg-6">
			<div class="trip-subcontainer trip-default">
				<h3 class="lead">
					Trip: {{ this.name }} Test trip name
				</h3>
				<div class="bottom-trip-container">
					<div class="risk-analysis-container">
							{{!-- {{ riskAnalysis }} --}}
						<p class="risk-analysis">
							Some Kind of Risk Analysis
						</p>
					</div>
					<div class="destination-container">
							{{!-- {{ riskAnalysis }} --}}
						<p class="destination">
							{{ this.destination }}
						</p>
					</div>
					<button type="button" class="btn btn-circle"><i class="">10</i></button>
				</div>
			</div>
		</div>
		{{/each}}
		{{/if}}
	<button id="add-trip-button" data-toggle="modal" data-target="#squarespaceModal" type="button" class="btn btn-circle"><i class="glyphicon glyphicon-plus"></i></button>
	</div>
</div>
}