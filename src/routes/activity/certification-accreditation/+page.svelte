<script lang="ts">
  import { LightboxKit, YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { modifieds, sources } = data;

  const title = 'НИЦ «СЭ» • Сертификация и аккредитация';
  const description = 'Сертификация и аккредитация | АО НИЦ «Строительная экспертиза»';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Сертификация и аккредитация</h1>
  </header>

  <div class={['frame readable', 'flex flex-col md:block']}>
    <LightboxKit
      {sources}
      {modifieds}
      class={[
        'order-2 mx-auto mt-16',
        'md:order-none md:my-1 md:mr-auto md:ml-8',
        'md:float-right md:flex md:flex-col md:gap-4 lg:gap-8'
      ]}
      custom={{
        overlay: 'overflow-offset'
      }}
      options={{
        behaviour: 'loop'
      }}
      alt="сертификация и аккредитация"
      sign="ic:round-zoom-out-map"
      adaptive
      centered
      shadow
      scale />

    <p>
      <b>Сертификация</b> это процедура подтверждения соответствия, посредством которой независимая от
      изготовителя (продавца, исполнителя) и потребителя (покупателя) организация удостоверяет в письменной
      форме, что продукция соответствует установленным требованиям.
    </p>
    <p>
      <b>Сертификат соответствия</b> &mdash; официальный документ, удостоверяющий, что сертифицированная
      продукция (выполняемая работа, оказываемая услуга, проектная документация и т.п.) полностью соответствует
      требованиям, определенным нормами и правилами Российской Федерации.
    </p>

    <p class="leader">
      <strong>НИЦ «Строительная экспертиза»</strong> предлагает свои услуги в области сертификации (подтверждении
      соответствия):
    </p>
    <ul>
      <li>материалов (песок, щебень, бетоны, растворы строительные и т.п.);</li>
      <li>изделий (кирпич, железобетонные изделия и т.п.);</li>
      <li>конструкций (балки, фермы и т.п.);</li>
      <li>
        строительного инструмента, оборудования и оснастки (формы для производства железобетонных
        изделий и т.п.);
      </li>
      <li>
        строительных площадок на различных этапах проведения строительно-монтажных,
        ремонтно-восстановительных и реконструкционных работ на объектах капитального строительства
        зданий, в т.ч. технически сложных и уникальных;
      </li>
      <li>строительных материалов и конструкций, не имеющих (утративших) паспорта качества;</li>
      <li>строительных изделий и конструкций, изготавливаемых на строительной площадке;</li>
      <li>технологических фундаментов и основания (под краны, дороги, бытовые городки).</li>
    </ul>

    <p class="leader"><b>Сертификацию</b> целесообразно проводить в следующих случаях:</p>
    <ul>
      <li>отсутствие (утрата) паспортов на материалы, продукцию и конструкции;</li>
      <li>
        отсутствие информации о технических характеристиках продукции и конструкций (состав,
        геометрия, прочность, экологическая безопасность и т.п.);
      </li>
      <li>изготовление строительных конструкций на строительной площадке;</li>
      <li>
        отсутствие паспорта на продукцию (уничтожение, утеря, кража, полное или частичное
        несоответствие фактическому объекту или маркировке на нем и т.п.);
      </li>
      <li>
        необходимость подтверждения соответствия несерийных и уникальных объектов, разработок и
        конструкций действующим нормам и правилам РФ.
      </li>
    </ul>

    <p>
      <b>Сертификат соответствия</b> является аналогом <b>Паспорта продукции</b>. Паспорт изделия
      может оформить только производитель продукции. Отсутствие паспорта на продукцию (уничтожение,
      утеря, кража, полное или частичное несоответствие фактическому объекту или маркировке на нем и
      т.п.) не позволяет продавцу или приобретателю применять данную продукцию по назначению.
      Единственная возможность использования данной продукции с утраченным паспортом &mdash;
      получение от независимой экспертной организации Экспертного (технического) заключения и
      Сертификата соответствия.
    </p>

    <p class="leader">
      НИЦ «Строительная экспертиза» аккредитовано в Системе добровольной сертификации «Национальный
      центр сертификации и стандартизации» (Система «НЦСС») в качестве:
    </p>
    <ul>
      <li>
        органа по сертификации:
        <ul>
          <li>продукции;</li>
          <li>работ (услуг);</li>
          <li>персонала.</li>
        </ul>
      </li>
      <li>
        органа по сертификации:
        <ul>
          <li>систем менеджмента качества;</li>
          <li>систем экологического менеджмента;</li>
          <li>систем менеджмента управления охраной и безопасностью труда;</li>
          <li>интегрированных систем менеджмента.</li>
        </ul>
      </li>
      <li>
        испытательной лаборатории, в область аккредитации которой входят:
        <ul>
          <li>строительные материалы, изделия и конструкции;</li>
          <li>металлические изделия и конструкции;</li>
          <li>нерудные строительные материалы;</li>
          <li>строительно-монтажные работы.</li>
        </ul>
      </li>
    </ul>

    <p>
      Компетентность испытательной лаборатории в составе АО НИЦ «Строительная экспертиза»
      подтверждена органом по аккредитации «Национальный центр сертификации и стандартизации»
      &mdash; аттестат аккредитации № RU.НЦСС.АЛ.001 от 24.07.2014 г.
    </p>
    <p>
      АО НИЦ «Строительная экспертиза» проведены работы по сертификации продукции таких организаций
      как <em>ООО «Сен-Гобен Строительная Продукция Рус»</em>,
      <em>ООО «ИНТРЕЙ Полимерные Системы»</em>, <em>ООО «ФОРМАПЛАСТ»</em>,
      <em>ООО «ПолиХимГрупп»</em>, <em>ООО «НПО СтройПрогресс»</em> и других.
    </p>

    <h2>Эксперты АО НИЦ «Строительная экспертиза»</h2>

    <ul>
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ul>
  </div>
</main>
