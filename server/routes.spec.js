/* eslint-env mocha */
process.env.NODE_ENV = 'test';

require('should');
var request = require('supertest');
var httpStatus = require('http-status');
var server = require('./app');

describe('Routing', function () {
  var app = null;
  var testProjects = [{
    '_id': '59164ca2a1964a2f34931bb5',
    'currentPhase': {
      '_id': '59164ccba1964a2f34931cf9',
      '__v': 0,
      '_schemaName': 'PhaseBase',
      'description': 'Intake',
      'name': 'Intake',
      'code': 'intake',
      'status': 'In Progress',
      'dateCompletedEst': '2017-08-11T00:01:15.622Z',
      'dateStartedEst': '2017-05-13T00:01:15.622Z',
      'dateCompleted': null,
      'dateStarted': '2017-05-13T00:01:15.760Z',
      'updatedBy': '58e2cf6e42b92831d82cefd4',
      'addedBy': '58e2cf6e42b92831d82cefd4',
      'dateUpdated': '2017-05-13T00:01:15.623Z',
      'dateAdded': '2017-05-13T00:01:15.623Z',
      'order': 1,
      'completed': false,
      'overrideReason': '',
      'overridden': false,
      'stream': null,
      'projectCode': 'new-project-for-joint-pcp',
      'project': '59164ca2a1964a2f34931bb5',
      'phaseBase': '58e2cf7042b92831d82cf056',
      'progress': 0,
      'duration': 90,
      'milestones': [],
      'id': '59164ccba1964a2f34931cf9'
    },
    'description': 'asdasddas',
    'name': 'New Project for Joint PCP',
    'code': 'new-project-for-joint-pcp',
    'status': 'Submitted',
    'userCan': {
      'delete': false,
      'write': false,
      'read': false,
      'manageDocumentPermissions': false,
      'manageFolders': false,
      'unPublish': false,
      'publish': false,
      'createProjectGroup': false,
      'createProjectUpdate': false,
      'createEnforcement': false,
      'createCommentPeriod': false,
      'createDocument': false,
      'createProjectInvitation': false,
      'createProjectComplaint': false,
      'createProjectCondition': false,
      'createInspectionReport': false,
      'createValuedComponent': false,
      'createArtifact': false,
      'editSchedule': false,
      'viewSchedule': false,
      'listProjectGroups': false,
      'listProjectUpdates': false,
      'listEnforcements': false,
      'listCommentPeriods': true,
      'listDocuments': true,
      'listProjectInvitations': false,
      'listProjectComplaints': false,
      'listProjectConditions': false,
      'listInspectionReports': false,
      'listValuedComponents': true,
      'listArtifacts': false,
      'editTombstone': false,
      'viewEAOTombstone': false,
      'viewTombstone': false,
      'listContacts': false,
      'managePermissions': false,
      'manageRoles': false,
      'createRole': false,
      'addUsersToContext': false
    },
    'lon': -123,
    'lat': 48,
    'proponent': null,
    'sector': 'Electric Transmission Lines',
    'type': 'Energy-Electricity',
    'eacDecision': '',
    'epicProjectID': 0,
    'id': '59164ca2a1964a2f34931bb5'
  }, {
    '_id': '58e403396660eb3210200785',
    'currentPhase': {
      '_id': '58e403ec6660eb32102008ca',
      '__v': 0,
      'completedBy': '58e2cf6e42b92831d82cefd4',
      '_schemaName': 'PhaseBase',
      'description': 'Determination',
      'name': 'Determination',
      'code': 'determination',
      'status': 'Complete',
      'dateCompletedEst': '2017-07-03T20:37:00.009Z',
      'dateStartedEst': '2017-04-04T20:37:00.009Z',
      'dateCompleted': '2017-04-13T06:31:23.034Z',
      'dateStarted': '2017-04-04T20:40:09.794Z',
      'updatedBy': '58e2cf6e42b92831d82cefd4',
      'addedBy': '58e2cf6e42b92831d82cefd4',
      'dateUpdated': '2017-04-04T20:37:00.009Z',
      'dateAdded': '2017-04-04T20:37:00.009Z',
      'order': 2,
      'completed': true,
      'overrideReason': '',
      'overridden': false,
      'stream': null,
      'projectCode': 'some-project',
      'project': '58e403396660eb3210200785',
      'phaseBase': '58e2cf7042b92831d82cf057',
      'progress': 100,
      'duration': 90,
      'milestones': [],
      'id': '58e403ec6660eb32102008ca'
    },
    'description': 'Some description',
    'name': 'Some project',
    'code': 'some-project',
    'status': 'Submitted',
    'userCan': {
      'delete': false,
      'write': false,
      'read': false,
      'manageDocumentPermissions': false,
      'manageFolders': false,
      'unPublish': false,
      'publish': false,
      'createProjectGroup': false,
      'createProjectUpdate': false,
      'createEnforcement': false,
      'createCommentPeriod': false,
      'createDocument': false,
      'createProjectInvitation': false,
      'createProjectComplaint': false,
      'createProjectCondition': false,
      'createInspectionReport': false,
      'createValuedComponent': false,
      'createArtifact': false,
      'editSchedule': false,
      'viewSchedule': false,
      'listProjectGroups': false,
      'listProjectUpdates': false,
      'listEnforcements': false,
      'listCommentPeriods': true,
      'listDocuments': true,
      'listProjectInvitations': false,
      'listProjectComplaints': false,
      'listProjectConditions': false,
      'listInspectionReports': false,
      'listValuedComponents': true,
      'listArtifacts': false,
      'editTombstone': false,
      'viewEAOTombstone': false,
      'viewTombstone': false,
      'listContacts': false,
      'managePermissions': false,
      'manageRoles': false,
      'createRole': false,
      'addUsersToContext': false
    },
    'lon': -123,
    'lat': 48,
    'proponent': {
      '_id': '58e2cf7042b92831d82cf05e',
      '__v': 0,
      '_schemaName': 'Organization',
      'description': '',
      'name': 'Acme Mining',
      'code': 'acme',
      'updatedBy': null,
      'addedBy': null,
      'dateUpdated': null,
      'dateAdded': null,
      'users': [],
      'country': '',
      'postal': 'a7a7a7',
      'province': 'BC',
      'city': 'Fort St.John',
      'address2': '',
      'address1': '999 Nowhere Street',
      'companyType': '',
      'parentCompany': '',
      'registeredIn': '',
      'companyLegal': '',
      'website': '',
      'company': '',
      'id': '58e2cf7042b92831d82cf05e'
    },
    'sector': 'Electric Transmission Lines',
    'type': 'Energy-Electricity',
    'eacDecision': 'Certificate Not Required',
    'epicProjectID': 0,
    'id': '58e403396660eb3210200785'
  }];

  var testRepo = {
    findAllProjects() {
      return Promise.resolve(testProjects);
    }
  };

  // The remote base url is required to create links to projects; i.e http://{BASE_URL}/p/{PROJECT_CODE}/detail
  var testApiSettings = {
    baseUrl: 'http://localhost:4000'
  };

  beforeEach(function () {
    return server
      .start({
        port: 4395,
        repo: testRepo,
        restSettings: testApiSettings
      })
      .then(function (serv) {
        app = serv;
      });
  });

  afterEach(function () {
    app.close();
    app = null;
  });

  describe('Data Export', function () {
    it('should return a GeoJson FeatureCollection object', function (done) {
      request(app)
        .get('/geojson')
        .expect('Content-Type', /json/)
        .expect(function (res) {
          // this is should.js syntax, very clear
          res.body.should.be.an.Object();
          res.body.should.have.property('type').eql('FeatureCollection');
          res.body.should.have.property('features').which.is.an.Array();
          res.body.features[0].should.containDeep({
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-123, 48]
            },
            properties: {
              _id: '59164ca2a1964a2f34931bb5',
              currentPhase: {
                description: 'Intake',
                name: 'Intake',
                code: 'intake',
                status: 'In Progress',
                id: '59164ccba1964a2f34931cf9'
              },
              description: 'asdasddas',
              name: 'New Project for Joint PCP',
              code: 'new-project-for-joint-pcp',
              status: 'Submitted',
              sector: 'Electric Transmission Lines',
              type: 'Energy-Electricity',
              eacDecision: '',
              epicProjectID: 0,
              id: '59164ca2a1964a2f34931bb5',
              projectUrl: testApiSettings.baseUrl + '/p/new-project-for-joint-pcp/detail'
            }
          });
        })
        .expect(httpStatus.OK, done);
    });
  });

  describe('Health Check', function () {
    it('should return server health information', function (done) {
      request(app)
        .get('/healthcheck')
        .expect('Content-Type', /json/)
        .expect(function (res) {
          // this is should.js syntax, very clear
          res.body.should.be.an.Object();
          res.body.should.containEql({
            service: 'OK'
          });
        })
        .expect(httpStatus.OK, done);
    });
  });

  describe('Invalid routes', function () {
    it('should 404 everything else', function (done) {
      request(app)
        .get('/foo/bar')
        .expect(httpStatus.NOT_FOUND, done);
    });
  });
});
