---
title: STRM Privacy
hide_table_of_contents: false
---

# STRM Privacy

[//]: # (TODO Remove this, this is just an example!)
```json title=aws-role-trust-policy.json placeholders oidc_id=OIDC ID, region=AWS Region, namespace=Kubernetes Namespace, serviceaccount=Kubernetes Service Account Name
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Service": "ec2.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        },
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::047925648519:oidc-provider/oidc.eks.$region.amazonaws.com/id/$oidc_id"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "oidc.eks.$region.amazonaws.com/id/$oidc_id:sub": "system:serviceaccount:$namespace:$serviceaccount"
                }
            }
        }
    ]
}
```

STRM Privacy is a privacy-focused data processing platform, that ensures that collected
data from a source is of a strictly defined shape and content (the Data Contract), and that
it is compliant with all well known privacy regulations, such as
[GDPR](https://gdpr.eu/). We strive to help you collect customer data
in real-time or process data in batch with privacy and usability built-in.

You can consume data through multiple channels and use it
for analytics, data science, machine learning, or store it
in your data lake. If you'd like to jump right in:

<div>
  <a class="button button_light" href="https://console.strmprivacy.io" target="_blank">Go to console</a>
  <a class="button button_dark" href="https://strmprivacy.io/request-demo/" target="_blank">Request a demo</a>
</div>

## Common use cases

As STRM Privacy supports both streaming and batch data pipelines, any use case can be enabled with our data processing
platform. Some examples of use cases:

* **E-Commerce platform customer journey tracking**. Decrease the time needed for your customers to find the product
  they are looking for by collecting data, respecting the customer's consent regarding data usage and still have the
  possibility to train Machine Learning models to assist the customer in their product journey.
* **App usage data**. Smartphone applications collecting data might contain sensitive identifiers that can be traced
  back to individuals. The app data can still be collected, only if the consent that is often an opt-out approach is
  provided. With STRM Privacy you can collect data, ensure that the sensitive data is protected while respecting the
  consent of the user.
* **Medical data**. With e-Health arising, data privacy becomes even more important than it already was in healthcare.
  For data analytics purposes, our platform can assist in ensuring that patient data stays secure, and that only
  specific employees get access to specific data.
* **Structure data privacy throughout your organization and enforce ownership, by purpose binding data throughout your
  ecosystem**. Privacy is hard. What STRM Privacy is all about, is making it as easy as possible to put privacy policies
  in
  operation. With STRM Privacy, you use a clear and scalable process that uses the privacy policies you already have,
  and make sure the agreements made there, are enforced on all data flowing through data pipelines.
* **Safe data transfer with third parties**. When you transfer your data to third parties the data moves, but the
  liability does not. Because of this, there is
  great reluctance around sharing your sensitive data. This is a shame, as there is a lot of value in collaboration,
  e.g. in research and in product development. STRM Privacy allows you to set clear conditions between the parties
  involved in the data sharing, and allows you to perform audits, if you need to show the correct measures are put in
  place.
* **Privacy-transformed data as base for machine learning models and analytics**. In the end, machine learning is
  statistics on large scale data systems. Hence, often personal data is not required for
  good result, what matters is the underlying distribution of the data. Using STRM Privacy streams as the basis for your
  models, you keep the links within your data intact while discarding the personal aspect of it.
* **Your use case?** [Reach out to us](docs/05-contact/index.md) and discuss your use case and see how STRM Privacy could help you streamline your
  the challenge of processing privacy-sensitive data.

## Support

Require assistance? Reach out to us! We’re happy to help you, and are always looking for ways to improve our
documentation.

Please see our [contact page](docs/05-contact/index.md) for ways to reach out
to us, whenever you’re facing an issue.

