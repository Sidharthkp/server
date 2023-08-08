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
import * as SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl from './Services'; //_splitter_
import * as SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn from '../Middlewares/Post/HTTPout'; //_splitter_
//append_imports_end
export class Api {
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
    this.serviceName = 'Api';
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
      instance = new Api(
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
      //appendnew_flow_Api_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Api');

    //appendnew_flow_Api_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: Api');

    this.app['post'](
      `${this.serviceBasePath}/add`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_LwRgDFQZYArcVYjN(bh, parentSpanInst);
          //appendnew_next_sd_tIfQG2ufm6ChQp6b
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_tIfQG2ufm6ChQp6b');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/show`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_IoVbbxAdls33mmcn(bh, parentSpanInst);
          //appendnew_next_sd_liRzviCu93RsU7ai
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_liRzviCu93RsU7ai');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/edit`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_tIfy5SxfEy5FhSNj(bh, parentSpanInst);
          //appendnew_next_sd_rI5gnxSOaLke2u04
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_rI5gnxSOaLke2u04');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/edit/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_L1VSCeuBR2PWmeQQ(bh, parentSpanInst);
          //appendnew_next_sd_DlehESPmOv5iBvDZ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_DlehESPmOv5iBvDZ');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['delete'](
      `${this.serviceBasePath}/delete/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Id9G3mVYUWU4xm7V(bh, parentSpanInst);
          //appendnew_next_sd_z5u3lPp6RBItCH6l
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_z5u3lPp6RBItCH6l');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/locations`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_xTIZMfMYNxCr1SRj(bh, parentSpanInst);
          //appendnew_next_sd_JbxzoG61xM1TUK01
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_JbxzoG61xM1TUK01');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Api_HttpIn
  }
  //   service flows_Api

  //appendnew_flow_Api_start

  async sd_LwRgDFQZYArcVYjN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LwRgDFQZYArcVYjN',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance: SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services =
        SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services.getInstance();
      bh = await SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance.store(spanInst, bh);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gYqMYx7UqS2xFfuJ(bh, parentSpanInst);
      //appendnew_next_sd_LwRgDFQZYArcVYjN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LwRgDFQZYArcVYjN',
        spanInst,
        'sd_LwRgDFQZYArcVYjN'
      );
    }
  }

  async sd_gYqMYx7UqS2xFfuJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gYqMYx7UqS2xFfuJ',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance: SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout =
        SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout.getInstance();
      bh = await SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance.httpOut(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_gYqMYx7UqS2xFfuJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gYqMYx7UqS2xFfuJ',
        spanInst,
        'sd_gYqMYx7UqS2xFfuJ'
      );
    }
  }

  async sd_IoVbbxAdls33mmcn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IoVbbxAdls33mmcn',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance: SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services =
        SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services.getInstance();
      bh = await SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance.show(spanInst, bh);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nevWiB1Jzxit1TOV(bh, parentSpanInst);
      //appendnew_next_sd_IoVbbxAdls33mmcn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IoVbbxAdls33mmcn',
        spanInst,
        'sd_IoVbbxAdls33mmcn'
      );
    }
  }

  async sd_nevWiB1Jzxit1TOV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nevWiB1Jzxit1TOV',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance: SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout =
        SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout.getInstance();
      bh = await SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance.httpOut(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_nevWiB1Jzxit1TOV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nevWiB1Jzxit1TOV',
        spanInst,
        'sd_nevWiB1Jzxit1TOV'
      );
    }
  }

  async sd_tIfy5SxfEy5FhSNj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tIfy5SxfEy5FhSNj',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance: SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services =
        SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services.getInstance();
      bh = await SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance.edit(spanInst, bh);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Yy6p3pvm0mMSpoKu(bh, parentSpanInst);
      //appendnew_next_sd_tIfy5SxfEy5FhSNj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tIfy5SxfEy5FhSNj',
        spanInst,
        'sd_tIfy5SxfEy5FhSNj'
      );
    }
  }

  async sd_Yy6p3pvm0mMSpoKu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Yy6p3pvm0mMSpoKu',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance: SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout =
        SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout.getInstance();
      bh = await SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance.httpOut(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_Yy6p3pvm0mMSpoKu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Yy6p3pvm0mMSpoKu',
        spanInst,
        'sd_Yy6p3pvm0mMSpoKu'
      );
    }
  }

  async sd_L1VSCeuBR2PWmeQQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_L1VSCeuBR2PWmeQQ',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance: SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services =
        SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services.getInstance();
      bh = await SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance.showEdit(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_J3VoLyYaxsbIlueS(bh, parentSpanInst);
      //appendnew_next_sd_L1VSCeuBR2PWmeQQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_L1VSCeuBR2PWmeQQ',
        spanInst,
        'sd_L1VSCeuBR2PWmeQQ'
      );
    }
  }

  async sd_J3VoLyYaxsbIlueS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J3VoLyYaxsbIlueS',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance: SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout =
        SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout.getInstance();
      bh = await SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance.httpOut(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_J3VoLyYaxsbIlueS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_J3VoLyYaxsbIlueS',
        spanInst,
        'sd_J3VoLyYaxsbIlueS'
      );
    }
  }

  async sd_Id9G3mVYUWU4xm7V(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Id9G3mVYUWU4xm7V',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance: SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services =
        SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services.getInstance();
      bh = await SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance.deleteData(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CF546lAZ5TG74Kc4(bh, parentSpanInst);
      //appendnew_next_sd_Id9G3mVYUWU4xm7V
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Id9G3mVYUWU4xm7V',
        spanInst,
        'sd_Id9G3mVYUWU4xm7V'
      );
    }
  }

  async sd_CF546lAZ5TG74Kc4(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CF546lAZ5TG74Kc4',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance: SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout =
        SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout.getInstance();
      bh = await SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance.httpOut(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_CF546lAZ5TG74Kc4
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CF546lAZ5TG74Kc4',
        spanInst,
        'sd_CF546lAZ5TG74Kc4'
      );
    }
  }

  async sd_xTIZMfMYNxCr1SRj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xTIZMfMYNxCr1SRj',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance: SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services =
        SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4Nl.Services.getInstance();
      bh = await SSD_SERVICE_ID_sd_j8BZQaL5g0eDM4NlInstance.locationFetch(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NNOxPXsmuitWD3Lc(bh, parentSpanInst);
      //appendnew_next_sd_xTIZMfMYNxCr1SRj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xTIZMfMYNxCr1SRj',
        spanInst,
        'sd_xTIZMfMYNxCr1SRj'
      );
    }
  }

  async sd_NNOxPXsmuitWD3Lc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NNOxPXsmuitWD3Lc',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance: SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout =
        SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHn.HTTPout.getInstance();
      bh = await SSD_SERVICE_ID_sd_GWsPxmoRAeOZIzHnInstance.httpOut(
        spanInst,
        bh
      );

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_NNOxPXsmuitWD3Lc
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NNOxPXsmuitWD3Lc',
        spanInst,
        'sd_NNOxPXsmuitWD3Lc'
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
  //appendnew_flow_Api_Catch
}
