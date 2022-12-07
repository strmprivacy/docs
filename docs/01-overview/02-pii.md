---
title: Personal Data
hide_table_of_contents: false
---

The principles upon which STRM Privacy has been built, revolve around personal data,
and the handling of it. This section explains what personal data and personally identifiable information are, why
it is important to treat this data differently from non-personal data and what the challenges are.

# Personal data and Personally Identifiable Information (PII)

Privacy as a concept applies to personal data. This can be both *your data*, and *data indicating it's you* (PII). Following along with [the Wikipedia article](https://en.wikipedia.org/wiki/Personal_data) we see that PII
data is *any information ... that can be used to distinguish or trace an individuals' identity*.

Legally the concept of PII data is not utilized by the European GDPR
directive. Its scope is determined by the non-equivalent concept of
[*personal
data*](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&qid=1620048611044&from=EN#d1e1489-1-1).

> _Article 4(1)_
>
> 'personal data' means any information relating to an identified or identifiable natural person ('data subject')

This breaks down into the following:
- _Personal Data_: any information, directly or indirectly, that can be traced back to an individual.
- [_Data Subject_](docs/02-concepts/02-data-contracts/04-data-subjects.md): the person to whom the data belongs and who should determine what happens with the data.

# Processing of data

Correctly executing the [Principles relating to the processing of personal data](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&qid=1620048611044&from=EN#d1e1807-1-1)
is at the heart of all the privacy related design decisions of STRM Privacy.

The following article of the GDPR states:

## Lawful processing

> _Article 5.1(a)_
> 
> Personal data shall be processed lawfully, fairly and in a transparent
> manner in relation to the data subject ('lawfulness, fairness and
> transparency');

This is the responsibility of the Data Protection Officer (DPO) of a company.
STRM Privacy cannot identify the purposes and transparency associated with *what
purposes* our customers have for collecting personal data. The DPO of the
customer shall identify the purpose(s) for which certain personal data
is collected and assign *consent-levels* to these purposes. These
consent-levels link data processing goals with personal data attributes
in the STRM Privacy events.

The data subject (i.e. the person on your website, your client,
your patient ...) needs to give permission for the separate
consent-levels, and the representation of these will be added to
*every* event that gets processed by STRM Privacy. [^1]

STRM Privacy removes the personal data aspect of **all** events upon
acceptance of the event, by encrypting **all** personal data
attributes (irrespective of any consent-levels given). These encrypted
events do not enter any long-term or persistent storage within STRM Privacy
but are transported onwards to customer storage.

These encrypted events do not contain *any personal data*. Losing them
might cost the customer business value, but implies *no privacy* risks.

## Data minimization

> _Article 5.1(c)_ 
> 
> adequate, relevant and limited to what is necessary in relation to the
> purposes for which they are processed (‘data minimisation’);

STRM Privacy collects events with or without personal data for all the
combined purposes of a company. The encryption of all personal data in
these events makes that they no longer contain personal data, unless one
has access to the associated encryption keys.

The most common flow of data processing at STRM Privacy is that the
customer *does not receive the encryption keys* but instead requests a
stream of *decrypted* events (which is not persisted), where only
events with adequate consent are visible, and with only those personal
data attributes that correspond to the purposes.

Access to these data is delegated to the DPO of the customer. The data
consumer in the company only has to explain the purpose of the data
processing, whereupon the DPO will assign a set of required
consent-levels, create a *decrypted stream* with these events, and assign
access credentials.

## Data retention: no longer than necessary

> _Article 5.1(e)_
>
> kept in a form which permits identification of data subjects for no
> longer than is necessary for the purposes for which the personal data are processed

STRM Privacy itself keeps the encrypted event data for 7 days [^2] for
technical purposes, so that a temporary failure of processing events
does not cause data loss. During this time, the data can
not be searched or queried in any meaningful way.

The key idea is that the customer does *not keep* decrypted data for
longer than is required for the purpose of the processing, specifically
these data should not be stored into long-term storage.

[^1]: technically these consent-levels are added as binary encoded small
integers, so there is negligible performance overhead.

[^2]: configurable setting
