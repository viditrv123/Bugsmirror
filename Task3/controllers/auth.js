const User = require("../models/user");

exports.updateRecord = (req, res) => {
    const _id = req.params.id;

	Student.findOneAndUpdate({ _id },
		req.body, { new: true },
		(err, student) => {
			if (err) {
				res.status(400).json(err);
			}

			res.status(200).json(student);
		});
}

exports.removeRecord = (req, res) => {
    const _id = req.params.id;

	Student.findOneAndRemove({ _id }, (err, student) => {

		if (err) {
			res.status(400).json(err);
		}

		if (!student) {
			res.status(404).json({ message: 'Student record not found' });
		}

		res.status(200).json({ message: `Student ${student.id} has been deleted` });
	});
}


exports.allRecords = (req, res) => {
    User.find({},(err, student) => {
		if (err) {
			res.status(400).json(err);
		}

		if (!student) {
			res.status(404).json({ message: 'No student found' });
		}

		res.status(200).json(student);});
}

exports.singleRecord = (req, res) => {
    const _id = req.params.id;
    User.find({_id},(err, student) => {
		if (err) {
			res.status(400).json(err);
		}

		if (!student) {
			res.status(404).json({ message: 'No student found' });
		}

		res.status(200).json(student);});
}

exports.newRecord = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err)
            return res.status(400).json({
                err: "Not Able to save user"
            });
        else
            res.json({
                first_name: user.first_name,
                email: user.email,
                
            });
    });
}




