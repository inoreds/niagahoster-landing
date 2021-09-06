<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index()
    {
        $data = $this->dataPlan();
        $library = $this->listLibrary();

        return view('landing_page',[
            'data' => $data,
            'library' => $library
        ]);
    }

    private function dataPlan()
    {
        $data = array();
        $pricing_detail = new \stdClass();
        $pricing_detail->resource = 0.5;
        $pricing_detail->disk = '500 MB';
        $pricing_detail->bandwidth = 'Unlimited';
        $pricing_detail->database = 'Unlimited';
        $pricing_detail->domain = 1;
        $pricing_detail->backup = 'Instant';
        $pricing_detail->ssl = 'Unlimited SSL';
        $pricing_detail->pop3 = null;
        $pricing_detail->domain = null;
        $pricing_detail->name_server = null;
        $pricing_detail->spam = null;
        $pricing_detail->prioritas = false;
        $pricing_detail->rating = false;

        $pricing = new \stdClass();
        $pricing->plan = 'Bayi';
        $pricing->price = 19900;
        $pricing->discount = 14900;
        $pricing->users = 938;
        $pricing->details = $pricing_detail;
        $pricing->best_seller = false;
        array_push($data, $pricing);

        $pricing_detail = new \stdClass();
        $pricing_detail->resource = 1;
        $pricing_detail->disk = 'Unlimited';
        $pricing_detail->bandwidth = 'Unlimited';
        $pricing_detail->database = 'Unlimited';
        $pricing_detail->backup = 'Instant';
        $pricing_detail->ssl = 'Unlimited SSL';
        $pricing_detail->pop3 = 'Unlimited';
        $pricing_detail->domain = 'Domain Gratis';
        $pricing_detail->name_server = null;
        $pricing_detail->spam = null;
        $pricing_detail->prioritas = false;
        $pricing_detail->rating = false;

        $pricing = new \stdClass();
        $pricing->plan = 'Pelajar';
        $pricing->price = 46900;
        $pricing->discount = 23450;
        $pricing->users = 4168;
        $pricing->details = $pricing_detail;
        $pricing->best_seller = false;
        array_push($data, $pricing);

        $pricing_detail = new \stdClass();
        $pricing_detail->resource = 2;
        $pricing_detail->disk = 'Unlimited';
        $pricing_detail->bandwidth = 'Unlimited';
        $pricing_detail->database = 'Unlimited';
        $pricing_detail->backup = 'Instant';
        $pricing_detail->ssl = 'Unlimited SSL';
        $pricing_detail->pop3 = 'Unlimited';
        $pricing_detail->domain = 'Domain Gratis';
        $pricing_detail->name_server = 'Private';
        $pricing_detail->spam = 'SpamAssasin';
        $pricing_detail->prioritas = false;
        $pricing_detail->rating = false;

        $pricing = new \stdClass();
        $pricing->plan = 'Personal';
        $pricing->price = 58900;
        $pricing->discount = 38900;
        $pricing->users = 10017;
        $pricing->details = $pricing_detail;
        $pricing->best_seller = true;
        array_push($data, $pricing);

        $pricing_detail = new \stdClass();
        $pricing_detail->resource = 3;
        $pricing_detail->disk = 'Unlimited';
        $pricing_detail->bandwidth = 'Unlimited';
        $pricing_detail->database = 'Unlimited';
        $pricing_detail->backup = 'Instant';
        $pricing_detail->ssl = 'Unlimited SSL';
        $pricing_detail->pop3 = 'Unlimited';
        $pricing_detail->domain = 'Domain Gratis';
        $pricing_detail->name_server = 'Private';
        $pricing_detail->spam = 'SpamExpert';
        $pricing_detail->prioritas = true;
        $pricing_detail->rating = true;

        $pricing = new \stdClass();
        $pricing->plan = 'Bisnis';
        $pricing->price = 109900;
        $pricing->discount = 65900;
        $pricing->users = 3552;
        $pricing->details = $pricing_detail;
        $pricing->best_seller = false;
        array_push($data, $pricing);

        return $data;
    }

    private function listLibrary(){
        $data = [
            'IcePHP', 'apc', 'apcu', 'apm', 'ares', 'bcmath', 'bcompiler', 'big_int', 'bitset', 'bloomy', 'bz2_filter', 'clamav', 'coin_accpetor', 'crack', 'dba',
            'http', 'huffman', 'idn', 'igbinary', 'imagick', 'imap', 'inclued', 'inotify', 'interbase', 'intl', 'ioncube_loader', 'ioncube_loader4', 'jasmin', 'json', 'Idap',
            'nd_pdo_mysql', 'oauth', 'oci8', 'odbc', 'opcache', 'pdf', 'pdo', 'pdo_dblib', 'pdo_firebird', 'pdo_mysql', 'pdo_odbc', 'pdo_pgsql', 'pdo_sqlite', 'pgsql', 'phalcon',
            'stats', 'stem', 'stomp', 'suhosin', 'sybase_ct', 'sysvmsg', 'sysvsem', 'sysvshm', 'tidy', 'timezonedb', 'trader', 'translit', 'uploadprogress', 'uri_template', 'uuid'
        ];

        return $data;
    }
}
