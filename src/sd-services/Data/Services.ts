let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class Services {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'Services';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new Services(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_Services_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Services');

    //appendnew_flow_Services_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Services');
    //appendnew_flow_Services_HttpIn
  }
  //   service flows_Services

  async store(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan('store', parentSpanInst);
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3ppmqRmz6JwOzzLV(bh, parentSpanInst);
      //appendnew_next_store
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FGNyjFXwE1X1gkiJ',
        spanInst,
        'store'
      );
    }
  }

  async show(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan('show', parentSpanInst);
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MiouXHDLCCe6vZy6(bh, parentSpanInst);
      //appendnew_next_show
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TL3IubiCnCV5AdmR',
        spanInst,
        'show'
      );
    }
  }

  async edit(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan('edit', parentSpanInst);
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cZoETxR4WaGYEkQz(bh, parentSpanInst);
      //appendnew_next_edit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_c08cGsO7gRW9pfhX',
        spanInst,
        'edit'
      );
    }
  }

  async showEdit(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan('showEdit', parentSpanInst);
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_5ZbC5UaSxpkDifF0(bh, parentSpanInst);
      //appendnew_next_showEdit
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sLKctrL7l4p54Ult',
        spanInst,
        'showEdit'
      );
    }
  }

  async deleteData(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'deleteData',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Ik9M9wJGRLwdJVTU(bh, parentSpanInst);
      //appendnew_next_deleteData
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zGWxLVzROm5w6u8J',
        spanInst,
        'deleteData'
      );
    }
  }

  async locationFetch(parentSpanInst, bh) {
    const spanInst = this.tracerService.createSpan(
      'locationFetch',
      parentSpanInst
    );
    try {
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ciWb8phhj0Jj0gpO(bh, parentSpanInst);
      //appendnew_next_locationFetch
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oUenaLFv2OYlvaHJ',
        spanInst,
        'locationFetch'
      );
    }
  }

  //appendnew_flow_Services_start

  async sd_3ppmqRmz6JwOzzLV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3ppmqRmz6JwOzzLV',
      parentSpanInst
    );
    try {
      bh.local.collection = 'Items';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_z1ULfa3G4a7MAtgy(bh, parentSpanInst);
      //appendnew_next_sd_3ppmqRmz6JwOzzLV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3ppmqRmz6JwOzzLV',
        spanInst,
        'sd_3ppmqRmz6JwOzzLV'
      );
    }
  }

  async sd_z1ULfa3G4a7MAtgy(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_z1ULfa3G4a7MAtgy',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_VhvgwC5mB4nIhvhZ',
        bh.local.collection,
        bh.input.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SI9xu79K1iVD5Uzv(bh, parentSpanInst);
      //appendnew_next_sd_z1ULfa3G4a7MAtgy
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_z1ULfa3G4a7MAtgy',
        spanInst,
        'sd_z1ULfa3G4a7MAtgy'
      );
    }
  }

  async sd_SI9xu79K1iVD5Uzv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SI9xu79K1iVD5Uzv',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'Success',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_SI9xu79K1iVD5Uzv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SI9xu79K1iVD5Uzv',
        spanInst,
        'sd_SI9xu79K1iVD5Uzv'
      );
    }
  }

  async sd_MiouXHDLCCe6vZy6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MiouXHDLCCe6vZy6',
      parentSpanInst
    );
    try {
      bh.local.query = {};

      bh.local.collection = 'Items';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JSOgrde3n84a9D3o(bh, parentSpanInst);
      //appendnew_next_sd_MiouXHDLCCe6vZy6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MiouXHDLCCe6vZy6',
        spanInst,
        'sd_MiouXHDLCCe6vZy6'
      );
    }
  }

  async sd_JSOgrde3n84a9D3o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JSOgrde3n84a9D3o',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_VhvgwC5mB4nIhvhZ',
        bh.local.collection,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6vdXcDfcp9pcfisl(bh, parentSpanInst);
      //appendnew_next_sd_JSOgrde3n84a9D3o
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JSOgrde3n84a9D3o',
        spanInst,
        'sd_JSOgrde3n84a9D3o'
      );
    }
  }

  async sd_6vdXcDfcp9pcfisl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6vdXcDfcp9pcfisl',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'Success',
        result: bh.local.result,
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_6vdXcDfcp9pcfisl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6vdXcDfcp9pcfisl',
        spanInst,
        'sd_6vdXcDfcp9pcfisl'
      );
    }
  }

  async sd_cZoETxR4WaGYEkQz(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cZoETxR4WaGYEkQz',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      bh.local.collection = 'Items';

      bh.local.filter = {
        _id: new ObjectId(bh.input.body._id),
      };

      bh.local.body = {
        $set: {
          name: bh.input.body.name,
          email: bh.input.body.email,
          country: bh.input.body.country,
          state: bh.input.body.state,
          location: bh.input.body.location,
          fileInput: bh.input.body.fileInput,
          weather: bh.input.body.weather,
          timezone1: bh.input.body.timezone1,
          timezone2: bh.input.body.timezone2,
          difference: bh.input.body.difference,
        },
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6vuu38pLtvEFdeUH(bh, parentSpanInst);
      //appendnew_next_sd_cZoETxR4WaGYEkQz
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cZoETxR4WaGYEkQz',
        spanInst,
        'sd_cZoETxR4WaGYEkQz'
      );
    }
  }

  async sd_6vuu38pLtvEFdeUH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6vuu38pLtvEFdeUH',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_VhvgwC5mB4nIhvhZ',
        bh.local.collection,
        bh.local.filter,
        bh.local.body,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VvVU5LwGpznaNVbp(bh, parentSpanInst);
      //appendnew_next_sd_6vuu38pLtvEFdeUH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6vuu38pLtvEFdeUH',
        spanInst,
        'sd_6vuu38pLtvEFdeUH'
      );
    }
  }

  async sd_VvVU5LwGpznaNVbp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VvVU5LwGpznaNVbp',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'Success',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_VvVU5LwGpznaNVbp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VvVU5LwGpznaNVbp',
        spanInst,
        'sd_VvVU5LwGpznaNVbp'
      );
    }
  }

  async sd_5ZbC5UaSxpkDifF0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5ZbC5UaSxpkDifF0',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      bh.local.query = { _id: new ObjectId(bh.input.params.id) };

      bh.local.collection = 'Items';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9uYpytmajui3hFpj(bh, parentSpanInst);
      //appendnew_next_sd_5ZbC5UaSxpkDifF0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5ZbC5UaSxpkDifF0',
        spanInst,
        'sd_5ZbC5UaSxpkDifF0'
      );
    }
  }

  async sd_9uYpytmajui3hFpj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9uYpytmajui3hFpj',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_VhvgwC5mB4nIhvhZ',
        bh.local.collection,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7ICuk7REBUog65sp(bh, parentSpanInst);
      //appendnew_next_sd_9uYpytmajui3hFpj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9uYpytmajui3hFpj',
        spanInst,
        'sd_9uYpytmajui3hFpj'
      );
    }
  }

  async sd_7ICuk7REBUog65sp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7ICuk7REBUog65sp',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'Success',
        result: bh.local.result[0],
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_7ICuk7REBUog65sp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7ICuk7REBUog65sp',
        spanInst,
        'sd_7ICuk7REBUog65sp'
      );
    }
  }

  async sd_Ik9M9wJGRLwdJVTU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ik9M9wJGRLwdJVTU',
      parentSpanInst
    );
    try {
      const { ObjectId } = require('mongodb');
      bh.local.query = { _id: new ObjectId(bh.input.params.id) };

      bh.local.collection = 'Items';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ZtNJPayqAbgrqEgo(bh, parentSpanInst);
      //appendnew_next_sd_Ik9M9wJGRLwdJVTU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ik9M9wJGRLwdJVTU',
        spanInst,
        'sd_Ik9M9wJGRLwdJVTU'
      );
    }
  }

  async sd_ZtNJPayqAbgrqEgo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZtNJPayqAbgrqEgo',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_VhvgwC5mB4nIhvhZ',
        bh.local.collection,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_V6BwOrBgk5b66fBE(bh, parentSpanInst);
      //appendnew_next_sd_ZtNJPayqAbgrqEgo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZtNJPayqAbgrqEgo',
        spanInst,
        'sd_ZtNJPayqAbgrqEgo'
      );
    }
  }

  async sd_V6BwOrBgk5b66fBE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_V6BwOrBgk5b66fBE',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'Success',
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_V6BwOrBgk5b66fBE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V6BwOrBgk5b66fBE',
        spanInst,
        'sd_V6BwOrBgk5b66fBE'
      );
    }
  }

  async sd_ciWb8phhj0Jj0gpO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ciWb8phhj0Jj0gpO',
      parentSpanInst
    );
    try {
      bh.local.query = {};

      bh.local.collection = 'Location';
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AIJzGiMaTyLGBXc4(bh, parentSpanInst);
      //appendnew_next_sd_ciWb8phhj0Jj0gpO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ciWb8phhj0Jj0gpO',
        spanInst,
        'sd_ciWb8phhj0Jj0gpO'
      );
    }
  }

  async sd_AIJzGiMaTyLGBXc4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AIJzGiMaTyLGBXc4',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_VhvgwC5mB4nIhvhZ',
        bh.local.collection,
        bh.local.query,
        {}
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MMKHchuY74xT0O97(bh, parentSpanInst);
      //appendnew_next_sd_AIJzGiMaTyLGBXc4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AIJzGiMaTyLGBXc4',
        spanInst,
        'sd_AIJzGiMaTyLGBXc4'
      );
    }
  }

  async sd_MMKHchuY74xT0O97(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MMKHchuY74xT0O97',
      parentSpanInst
    );
    try {
      bh.local.response = {
        statusCode: 200,
        message: 'Success',
        result: bh.local.result,
      };

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_MMKHchuY74xT0O97
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MMKHchuY74xT0O97',
        spanInst,
        'sd_MMKHchuY74xT0O97'
      );
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_Services_Catch
}
