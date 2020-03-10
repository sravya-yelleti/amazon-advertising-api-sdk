import { Operation } from '../operation'
import { Decode } from '../../decorators'
import { AmazonAdTypeURIPrefix } from '../amazon-ad-type-uri-prefix'

import {
  SponsoredBrandsListTargetsRequest,
  SponsoredBrandsListTargetsResponse,
  SponsoredBrandsUpdateTargetsRequest,
  SponsoredBrandsUpdateTargetsResponse,
  SponsoredBrandsCreateTargetsRequest,
  SponsoredBrandsCreateTargetsResponse,
  TargetId,
  SponsoredBrandsTargetingClause,
  SponsoredBrandsTargetingClauseResponse,
  SponsoredBrandsBatchGetTargetsRequest,
  SponsoredBrandsBatchGetTargetsResponse,
  SponsoredBrandsListNegativeTargetsRequest,
  SponsoredBrandsListNegativeTargetsResponse,
  SponsoredBrandsUpdateNegativeTargetsRequest,
  SponsoredBrandsUpdateNegativeTargetsResponse,
  SponsoredBrandsCreateNegativeTargetsResponse,
  SponsoredBrandsCreateNegativeTargetsRequest,
  SponsoredBrandsNegativeTargetingClause,
  SponsoredBrandsNegativeTargetId,
  SponsoredBrandsBatchGetNegativeTargetsResponse,
  SponsoredBrandsBatchGetNegativeTargetsRequest,
} from './types'

export class SponsoredBrandsProductTargetingOperation extends Operation {
  protected targetResource = `${this.version}/${AmazonAdTypeURIPrefix.SponsoredBrands}/targets`
  protected negativeTargetResource = `sb/negativeTargets`

  /**
   * Gets a list of product targets associated with the client identifier passed in the authorization header, filtered by specified criteria.
   *
   * @param {SponsoredBrandsListTargetsRequest} params
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsListTargetsResponse)
  public listTargets(params: SponsoredBrandsListTargetsRequest) {
    return this.client.post<SponsoredBrandsListTargetsResponse>(this.targetResource, params)
  }

  /**
   * Updates one or more targets.
   *
   * @param {SponsoredBrandsUpdateTargetsRequest[]} params
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsUpdateTargetsResponse)
  public updateTargets(params: SponsoredBrandsUpdateTargetsRequest[]) {
    return this.client.put<SponsoredBrandsUpdateTargetsResponse>(this.targetResource, params)
  }

  /**
   * Create one or more new targets.
   *
   * @param {SponsoredBrandsCreateTargetsRequest} params
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsCreateTargetsResponse)
  public createTargets(params: SponsoredBrandsCreateTargetsRequest) {
    return this.client.post<SponsoredBrandsCreateTargetsResponse>(this.targetResource, params)
  }

  /**
   * Gets a target specified by identifier.
   *
   * @param {TargetId} targetId
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsTargetingClause)
  public getTarget(targetId: TargetId) {
    return this.client.get<SponsoredBrandsTargetingClause>(`${this.targetResource}/${targetId}`)
  }

  /**
   * Archives a target specified by identifier. Note that archiving is permanent, and once a target has been archived it can't be made active again.
   *
   * @param {TargetId} targetId
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsTargetingClauseResponse)
  public archiveTarget(targetId: TargetId) {
    return this.client.delete<SponsoredBrandsTargetingClauseResponse>(
      `${this.targetResource}/${targetId}`,
    )
  }

  /**
   * Gets one or more product targets specified by identifiers.
   *
   * @param {SponsoredBrandsBatchGetTargetsRequest} params
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsBatchGetTargetsResponse)
  public batchGetTargets(params: SponsoredBrandsBatchGetTargetsRequest) {
    return this.client.post<SponsoredBrandsBatchGetTargetsResponse>(this.targetResource, params)
  }

  /**
   * Gets a list of product negative targets associated with the client identifier passed in the authorization header, filtered by specified criteria.
   *
   * @param {SponsoredBrandsListNegativeTargetsRequest} params
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsListNegativeTargetsResponse)
  public listNegativeTargets(params: SponsoredBrandsListNegativeTargetsRequest) {
    return this.client.post<SponsoredBrandsListNegativeTargetsResponse>(
      this.negativeTargetResource,
      params,
    )
  }

  /**
   * Updates one or more negative targets.
   *
   * @param {SponsoredBrandsUpdateNegativeTargetsRequest} params
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsUpdateNegativeTargetsResponse)
  public updateNegativeTargets(params: SponsoredBrandsUpdateNegativeTargetsRequest) {
    return this.client.put<SponsoredBrandsUpdateNegativeTargetsResponse>(
      this.negativeTargetResource,
      params,
    )
  }

  /**
   * Create one or more new negative targets.
   *
   * @param {SponsoredBrandsCreateNegativeTargetsRequest} params
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsCreateNegativeTargetsResponse)
  public createNegativeTargets(params: SponsoredBrandsCreateNegativeTargetsRequest) {
    return this.client.post<SponsoredBrandsCreateNegativeTargetsResponse>(
      this.negativeTargetResource,
      params,
    )
  }

  /**
   * Gets a negative target specified by identifier.
   *
   * @param {SponsoredBrandsNegativeTargetId} negativeTargetId
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsNegativeTargetingClause)
  public getNegativeTarget(negativeTargetId: SponsoredBrandsNegativeTargetId) {
    return this.client.get<SponsoredBrandsNegativeTargetingClause>(
      `${this.negativeTargetResource}/${negativeTargetId}`,
    )
  }

  /**
   * Archives a negative target specified by identifier.
   * Note that archiving is permanent, and once a negative target has been archived it can't be made active again.
   *
   * @param {SponsoredBrandsNegativeTargetId} negativeTargetId
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsTargetingClauseResponse)
  public archiveNegativeTarget(negativeTargetId: SponsoredBrandsNegativeTargetId) {
    return this.client.delete<SponsoredBrandsTargetingClauseResponse>(
      `${this.negativeTargetResource}/${negativeTargetId}`,
    )
  }

  /**
   * Gets one or more product negative targets specified by identifiers.
   *
   * @param {SponsoredBrandsBatchGetNegativeTargetsRequest} params
   * @returns
   * @memberof SponsoredBrandsProductTargetingOperation
   */
  @Decode(SponsoredBrandsBatchGetNegativeTargetsResponse)
  public batchGetNegativeTargets(params: SponsoredBrandsBatchGetNegativeTargetsRequest) {
    return this.client.post<SponsoredBrandsBatchGetNegativeTargetsResponse>(
      this.negativeTargetResource,
      params,
    )
  }
}