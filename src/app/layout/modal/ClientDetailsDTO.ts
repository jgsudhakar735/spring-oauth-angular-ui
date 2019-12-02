export interface ClientDetailsDTO {

  id: number;

	client_id: string;

	resource_ids: string;

	client_secret: string;

	scope: string;

	authorized_grant_types: string;

	web_server_redirect_uri: string;

	authorities: string;

	access_token_validity: number;

	refresh_token_validity: number;

	additional_information: string;

	autoapprove: string;

}
