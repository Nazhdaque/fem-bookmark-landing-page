import JustValidate from "just-validate";

const elements = {
	form: document.querySelector("#sign-up-form"),
	input: document.querySelector("#email"),
	btn: document.querySelector("#submit-form"),
};

const validator = new JustValidate(elements.form, {
	errorFieldCssClass: ["error-field"],
	successLabelCssClass: ["labels", "success-label"],
	errorLabelCssClass: ["labels", "error-label"],
	validateBeforeSubmitting: true,
});

validator.addField(
	elements.input,
	[
		{ rule: "required" },
		{ rule: "email", errorMessage: "Whoops, make sure it's a email" },
	],
	{ successMessage: "Excellent!" }
);
