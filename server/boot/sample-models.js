// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0


//init addmin for driver-tracking
module.exports = function (app) {
    var Driver = app.models.Driver;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;

   /* Driver.create([
        {
            "full_name" : "Nguyen Ngoc Son",
            "date_of_birth" : "2018-10-14T04:21:13.163Z",
            "citizen_id" : "132111222",
            "username" : "admin",
            "ml_model" : "aaa",
            "realm" : "string",
            "password" : "18041996",
            "email" : "mr.kurro@gmail.com",
            "emailVerified" : false
        },
    ], function (err, users) {
        if (err) throw err;
        console.log('Created users:', users);

        //create the admin role
        Role.create({
            name: 'admin'
        }, function (err, role) {
            if (err) throw err;
            console.log('Created role:', role);
            //make user admin an admin
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: users[0].id
            }, function (err, principal) {
                if (err) throw err;
                console.log('Created principal:', principal);
            });
        });

    });*/
};
